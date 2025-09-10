import { LengthString, RequiredString } from '@/types/zod';

export const getMinMaxMessage = (
  fieldName: string,
  requiredString: RequiredString,
  lengthString: LengthString,
  length: number,
) =>
  `${fieldName} ${requiredString} быть не ${lengthString} ${length} символов`;
