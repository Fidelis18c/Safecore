import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email(),
  companyName: z.string().max(150).optional().or(z.literal('')),
  location: z.string().max(100).optional().or(z.literal('')),
  phoneCode: z.string().max(10).optional().or(z.literal('')),
  phone: z.string().max(20).optional().or(z.literal('')),
  message: z.string().min(10).max(3000),
  honeypot: z.string().max(0),
});
