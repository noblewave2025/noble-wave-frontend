'use client';

import { useFetch } from '@/hooks/useFetch';

type User = {
  id: string;
  email: string;
  role: 'admin' | 'user';
};

export function useAuth() {
  const { data, loading, makeRequest } = useFetch<{ user: User }>();

  makeRequest({
    url: '/api/users/me',
  });

  return {
    user: data?.user,
    role: data?.user?.role,
    loading,
    isAuthenticated: Boolean(data?.user),
  };
}
