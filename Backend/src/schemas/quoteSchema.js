import { z } from 'zod';

export const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  company: z.string().max(150).optional(),
  phone: z.string().min(7, 'Phone is required').max(20),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  honeypot: z.string().max(0),
});
