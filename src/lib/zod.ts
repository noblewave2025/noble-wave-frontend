import { LengthString, RequiredString } from '@/consts/zod';

export const getMinMaxMessage = (
  fieldName: string,
  requiredString: RequiredString,
  lengthString: LengthString,
  length: number,
) =>
  `${fieldName} ${requiredString} быть не ${lengthString} ${length} символов`;
