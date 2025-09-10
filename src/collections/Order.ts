import { CollectionConfig } from 'payload';
import { authenticated } from '@/common/accessControls/authenticated';

export const Orders: CollectionConfig = {
  slug: 'orders',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  defaultPopulate: {
    user: true,
    product: true,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'status',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};
