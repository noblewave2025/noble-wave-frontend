'use client';

import { useFetch } from '@/common/hooks/useFetch';

type User = {
  id: string;
  email: string;
  role: 'admin' | 'user';
};

export function useAuth() {
  const { data, loading, error } = useFetch<{ user: User }>('/api/users/me');

  return {
    user: data?.user,
    role: data?.user?.role,
    loading,
    error,
    isAuthenticated: Boolean(data?.user),
  };
}
