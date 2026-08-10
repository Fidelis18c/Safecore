import { z } from 'zod';
import { query } from '../utils/db.js';
import { sendNotificationEmail } from '../utils/email.js';
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
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    });

    res.status(201).json({ success: true, message: 'Quote request received. We will contact you within 24 hours.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
  }
};
