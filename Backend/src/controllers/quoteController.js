import { z } from 'zod';
import { query } from '../utils/db.js';
import { sendNotificationEmail } from '../utils/email.js';
import { renderNotificationEmail } from '../utils/emailTemplate.js';
import { quoteSchema } from '../schemas/quoteSchema.js';

export const submitQuote = async (req, res, next) => {
  try {
    const data = quoteSchema.parse(req.body);

    // Honeypot check
    if (data.honeypot !== '') {
      return res.status(201).json({ success: true, message: 'Quote request received.' });
    }

    await query(
      `INSERT INTO leads (name, company, phone, email, service, message, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [data.name, data.company, data.phone, data.email, data.service, data.message, 'quote_form']
    );

    await sendNotificationEmail({
      subject: `New Quote Request: ${data.name} - ${data.company || 'No Company'}`,
      html: renderNotificationEmail({
        heading: 'New Quote Request',
        subtitle: 'Submitted via the Request a Quote form',
        fields: [
          { label: 'Name', value: data.name },
          { label: 'Company', value: data.company },
          { label: 'Phone', value: data.phone },
          { label: 'Email', value: data.email },
          { label: 'Service', value: data.service },
          { label: 'Message', value: data.message }
        ]
      })
    });

    res.status(201).json({ success: true, message: 'Quote request received. We will contact you within 24 hours.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
  }
};
