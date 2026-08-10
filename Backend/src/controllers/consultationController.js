import { z } from 'zod';
import { query } from '../utils/db.js';
import { sendNotificationEmail } from '../utils/email.js';
import { renderNotificationEmail } from '../utils/emailTemplate.js';
import { consultationSchema } from '../schemas/consultationSchema.js';

export const submitConsultation = async (req, res, next) => {
  try {
    const data = consultationSchema.parse(req.body);

    if (data.honeypot !== '') {
      return res.status(201).json({ success: true, message: 'Consultation request received.' });
    }

    await query(
      `INSERT INTO consultation_bookings (name, company, phone, email, preferred_date, preferred_time, topic, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [data.name, data.company, data.phone, data.email, data.preferred_date || null, data.preferred_time, data.topic, data.notes]
    );

    await sendNotificationEmail({
      subject: `New Consultation Booking: ${data.name}`,
      html: renderNotificationEmail({
        heading: 'New Consultation Booking',
        fields: [
          { label: 'Name', value: data.name },
          { label: 'Company', value: data.company },
          { label: 'Phone', value: data.phone },
          { label: 'Email', value: data.email },
          { label: 'Date', value: data.preferred_date },
          { label: 'Time', value: data.preferred_time },
          { label: 'Topic', value: data.topic },
          { label: 'Notes', value: data.notes }
        ]
      })
    });

    res.status(201).json({ success: true, message: 'Consultation request received. We will contact you to confirm the time.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
  }
};
