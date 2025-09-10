import type { CollectionConfig } from 'payload';
import { adminRequired } from '@/common/accessControls/adminRequired';
import { publicAccess } from '@/common/accessControls/publicAccess';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    cookies: {
      domain: '/',
      secure: true,
      sameSite: 'Lax',
    },
  },
  access: {
    create: publicAccess,
    delete: publicAccess,
    read: publicAccess,
    update: publicAccess,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      hasMany: false,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      defaultValue: 'user',
      required: true,
    },
  ],
};
