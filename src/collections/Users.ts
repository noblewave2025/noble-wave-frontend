import type { CollectionConfig } from 'payload';
import { publicAccess } from '@/common/accessControls/publicAccess';
import { RolesOptions } from '@/types/roles';

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
      options: RolesOptions,
      defaultValue: 'user',
      required: true,
    },
  ],
};
