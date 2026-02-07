'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const logoutAction = async () => {
  const cook = await cookies();
  cook.delete('payload-token');
  redirect('/login');
};
