import { Field } from 'payload';

export const iconField: Field = {
  name: 'icon',
  type: 'text',
  required: true,
  admin: {
    components: {
      Field: '@/custom-fields/icon-field/IconSelectField',
    },
  },
};
