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
    },
    {
      name: 'background-image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
