import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    cookies: {
      domain: '/',
      secure: false,
      sameSite: 'Lax',
    },
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
