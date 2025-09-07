import { CollectionConfig } from 'payload';

export const MainPageProducts: CollectionConfig = {
  slug: 'main-page-products',
  defaultPopulate: {
    product: true,
  },
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'descritpion',
      type: 'richText',
      required: false,
    },
    {
      name: 'background-image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};
