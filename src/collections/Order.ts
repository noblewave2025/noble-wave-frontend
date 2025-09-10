import { CollectionConfig } from 'payload';
import { authenticated } from '@/common/accessControls/authenticated';
import { OrderStatusOptions } from '@/types/order';
import { adminRequired } from '@/common/accessControls/adminRequired';
import { ContactOptions } from '@/types/contacts';

export const Orders: CollectionConfig = {
  slug: 'orders',
  access: {
    create: authenticated,
    delete: adminRequired,
    read: authenticated,
    update: adminRequired,
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
      type: 'select',
      hasMany: false,
      options: OrderStatusOptions,
      defaultValue: 'registration',
      required: true,
    },
    {
      name: 'contact',
      type: 'select',
      hasMany: false,
      options: ContactOptions,
      defaultValue: 'tg',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      required: true,
    },
  ],
};
