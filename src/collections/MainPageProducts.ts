import { CollectionConfig } from 'payload';
import { authenticated } from '@/common/accessControls/authenticated';
import { adminRequired } from '@/common/accessControls/adminRequired';
import { publicAccess } from '@/common/accessControls/publicAccess';

export const MainPageProducts: CollectionConfig = {
  slug: 'main-page-products',
  access: {
    create: adminRequired,
    delete: adminRequired,
    read: publicAccess,
    update: adminRequired,
  },
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
