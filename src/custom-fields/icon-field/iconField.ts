import { Field } from 'payload';

export const iconField: Field = {
  name: 'color',
  type: 'text',
  required: true,
  admin: {
    components: {
      Field: '@/custom-fields/icon-field/IconSelectField',
    },
  },
};
