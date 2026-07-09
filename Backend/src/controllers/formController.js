import { z } from 'zod';
import { supabase } from '../utils/supabase.js';
import { sendNotificationEmail } from '../utils/email.js';

// Schemas
const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  company: z.string().max(150).optional(),
  phone: z.string().min(7, 'Phone is required').max(20),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  honeypot: z.string().max(0),
});

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(3000),
  honeypot: z.string().max(0),
});

const consultationSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(150).optional(),
  phone: z.string().min(7).max(20),
  email: z.string().email().optional().or(z.literal('')),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
  topic: z.string().optional(),
  notes: z.string().max(2000).optional(),
  honeypot: z.string().max(0),
});

// Controllers
export const submitQuote = async (req, res, next) => {
  try {
    const data = quoteSchema.parse(req.body);
    
    // Honeypot check
    if (data.honeypot !== '') {
      return res.status(201).json({ success: true, message: 'Quote request received.' });
    }

    const { error } = await supabase
      .from('leads')
      .insert([
        {
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
          service: data.service,
          message: data.message,
          source: 'quote_form'
        }
      ]);

    if (error) throw error;

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

export const submitContact = async (req, res, next) => {
  try {
    const data = contactSchema.parse(req.body);
    
    if (data.honeypot !== '') {
      return res.status(201).json({ success: true, message: 'Message sent successfully.' });
    }

    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message
        }
      ]);

    if (error) throw error;

    await sendNotificationEmail({
      subject: `New Contact Message: ${data.subject || 'General Enquiry'}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    });

    res.status(201).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
  }
};

export const submitConsultation = async (req, res, next) => {
  try {
    const data = consultationSchema.parse(req.body);
    
    if (data.honeypot !== '') {
      return res.status(201).json({ success: true, message: 'Consultation request received.' });
    }

    const { error } = await supabase
      .from('consultation_bookings')
      .insert([
        {
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
          preferred_date: data.preferred_date || null,
          preferred_time: data.preferred_time,
          topic: data.topic,
          notes: data.notes
        }
      ]);

    if (error) throw error;

    await sendNotificationEmail({
      subject: `New Consultation Booking: ${data.name}`,
      html: `
        <h2>New Consultation Booking</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Date:</strong> ${data.preferred_date}</p>
        <p><strong>Time:</strong> ${data.preferred_time}</p>
        <p><strong>Topic:</strong> ${data.topic}</p>
        <p><strong>Notes:</strong> ${data.notes}</p>
      `
    });

    res.status(201).json({ success: true, message: 'Consultation request received. We will contact you to confirm the time.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
  }
};
