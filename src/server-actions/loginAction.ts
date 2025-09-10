'use server';

import { getPayload } from 'payload';
import { redirect } from 'next/navigation';
import config from '@payload-config';

export const loginAction = async (formData: {
  email: string;
  password: string;
}) => {
  const payload = await getPayload({ config });
  await payload.login({
    collection: 'users',
    data: {
      email: formData.email,
      password: formData.password,
    },
  });

  redirect('/');
};
