import type { CollectionConfig } from 'payload';
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
