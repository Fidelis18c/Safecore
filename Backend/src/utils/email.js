import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export const sendNotificationEmail = async ({ subject, html }) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[Warning] RESEND_API_KEY not set. Email not sent.');
    return null;
  }

  try {
    const data = await resend.emails.send({
      from: 'SAFE Core System <notifications@safecore.co.tz>',
      to: [process.env.ADMIN_EMAIL || 'kiluluj12@gmail.com'],
      subject,
      html,
    });
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    return null;
  }
};
