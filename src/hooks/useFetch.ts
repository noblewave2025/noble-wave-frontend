'use client';

import { useState, useCallback } from 'react';

export function useFetch<T = unknown>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  type RequestOptions = RequestInit & { url: string };

  const makeRequest = useCallback(
    async ({ url, ...options }: RequestOptions) => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          credentials: 'include',
          ...options,
          headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
          },
        });

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        const json = (await res.json()) as T;
        setData(json);
        return json;
      } catch (err) {
        throw err; // пробрасываем наружу
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { data, loading, makeRequest };
}
