import { CollectionConfig } from 'payload';

export const Footer: CollectionConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'icons',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};
