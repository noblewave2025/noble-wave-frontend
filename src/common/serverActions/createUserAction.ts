'use server';

import { getPayload } from 'payload';
import config from '@payload-config';
import { redirect } from 'next/navigation';

export const createUserAction = async (formData: {
  email: string;
  password: string;
}) => {
  const payload = await getPayload({ config });
  const user = await payload.create({
    collection: 'users',
    data: {
      email: formData.email,
      password: formData.password,
      role: 'user',
    },
  });
  console.log(user);
  await payload.login({
    collection: 'users',
    data: {
      email: formData.email,
      password: formData.password,
    },
  });
  redirect('/');
};
