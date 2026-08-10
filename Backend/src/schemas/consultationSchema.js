import { z } from 'zod';

export const consultationSchema = z.object({
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
