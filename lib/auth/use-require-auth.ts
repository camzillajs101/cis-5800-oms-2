'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/auth-context';
import { useEffect } from 'react';

export function useRequireAuth() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/sign-in');
    }
  }, [user, loading, router]);

  return { user, loading };
}
