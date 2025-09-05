import { CollectionConfig } from 'payload';

export const AboutUs: CollectionConfig = {
  slug: 'about-us',
  fields: [
    {
      name: 'about',
      type: 'richText',
      required: true,
    },
    {
      name: 'who-us',
      type: 'richText',
      required: true,
    },
  ],
};
