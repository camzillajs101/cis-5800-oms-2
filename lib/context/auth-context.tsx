'use client';

import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import type { User } from '@/lib/auth/session';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/auth/user');
        if (!response.ok) {
          if (response.status === 401) {
            setUser(null);
          } else {
            setError('Failed to fetch user');
          }
        } else {
          const data = await response.json();
          setUser(data.data || null);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
