'use client';

import { LengthString, RequiredString } from '@/consts/zod';
import { getMinMaxMessage } from '@/lib/zod';
import { z } from 'zod';

export const AuthSchema = z.object({
  email: z.email({
    message: 'Введите корректную почту',
  }),
  password: z
    .string()
    .min(8, getMinMaxMessage('Пароль', RequiredString.M, LengthString.S, 8))
    .max(15, getMinMaxMessage('Пароль', RequiredString.M, LengthString.S, 15)),
});
