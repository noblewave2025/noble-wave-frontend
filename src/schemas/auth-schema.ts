'use client';

import { z } from 'zod';

export const AuthSchema = z.object({
  email: z.email('Введите корректную почту'),
  password: z
    .string()
    .min(8, 'Минимальная длина 8 символов')
    .max(15, 'Максимальная длина 15 символов'),
});
