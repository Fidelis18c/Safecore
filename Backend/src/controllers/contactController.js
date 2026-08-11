import { z } from 'zod';
import { query } from '../utils/db.js';
import { sendNotificationEmail } from '../utils/email.js';
import { renderNotificationEmail } from '../utils/emailTemplate.js';
import { contactSchema } from '../schemas/contactSchema.js';

export const submitContact = async (req, res, next) => {
  try {
    const data = contactSchema.parse(req.body);

    if (data.honeypot !== '') {
      return res.status(201).json({ success: true, message: 'Message sent successfully.' });
    }

    await query(
      `INSERT INTO contact_messages (first_name, last_name, email, company_name, location, phone_code, phone, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [data.firstName, data.lastName, data.email, data.companyName, data.location, data.phoneCode, data.phone, data.message]
    );

    await sendNotificationEmail({
      subject: `New Contact Message: ${data.firstName} ${data.lastName}`,
      html: renderNotificationEmail({
        heading: 'New Contact Message',
        subtitle: 'Submitted via the Contact Us form',
        fields: [
          { label: 'Name', value: `${data.firstName} ${data.lastName}` },
          { label: 'Email', value: data.email },
          { label: 'Phone', value: [data.phoneCode, data.phone].filter(Boolean).join(' ') },
          { label: 'Company', value: data.companyName },
          { label: 'Location', value: data.location },
          { label: 'Message', value: data.message }
        ]
      })
    });

    res.status(201).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
  }
};
