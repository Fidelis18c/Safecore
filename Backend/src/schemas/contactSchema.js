import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(3000),
  honeypot: z.string().max(0),
});
