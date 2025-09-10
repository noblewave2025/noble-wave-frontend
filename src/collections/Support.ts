import { CollectionConfig } from 'payload';

export const Support: CollectionConfig = {
  slug: 'support',
  fields: [
    {
      name: 'fio',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'text',
      required: true,
    },
  ],
};
