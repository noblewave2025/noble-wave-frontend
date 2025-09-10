import { MESSAGES } from '@/consts/zod';
import { getMinMaxMessage } from '@/lib/zod';
import { LengthString, RequiredString } from '@/consts/zod';
import { z } from 'zod';

export const SupportSchema = z.object({
  fio: z
    .string({
      message: MESSAGES.REQUIRED,
    })
    .min(4, {
      message: getMinMaxMessage('ФИО', RequiredString.A, LengthString.S, 4),
    })
    .max(100, {
      message: getMinMaxMessage('ФИО', RequiredString.A, LengthString.L, 100),
    }),
  email: z
    .email({
      message: MESSAGES.REQUIRED,
    })
    .max(100, {
      message: getMinMaxMessage('Почта', RequiredString.F, LengthString.L, 100),
    }),
  message: z
    .string({
      message: MESSAGES.REQUIRED,
    })
    .min(20, {
      message: getMinMaxMessage(
        'Сообщение',
        RequiredString.A,
        LengthString.S,
        20,
      ),
    })
    .max(500, {
      message: getMinMaxMessage(
        'Сообщение',
        RequiredString.A,
        LengthString.L,
        500,
      ),
    }),
});
