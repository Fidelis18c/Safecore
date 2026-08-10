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
      `INSERT INTO contact_messages (name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)`,
      [data.name, data.email, data.phone, data.subject, data.message]
    );

    await sendNotificationEmail({
      subject: `New Contact Message: ${data.subject || 'General Enquiry'}`,
      html: renderNotificationEmail({
        heading: 'New Contact Message',
        fields: [
          { label: 'Name', value: data.name },
          { label: 'Email', value: data.email },
          { label: 'Phone', value: data.phone },
          { label: 'Subject', value: data.subject },
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
