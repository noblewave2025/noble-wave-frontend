'use server';

import payload from 'payload';
import { redirect } from 'next/navigation';

export const loginAction = async (formData: {
  email: string;
  password: string;
}) => {
  await payload.login({
    collection: 'users',
    data: {
      email: formData.email,
      password: formData.password,
    },
  });

  redirect('/');
};
