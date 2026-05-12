import { auth } from './server';

export type User = {
  id: string;
  email: string;
  role?: string;
  email_verified?: boolean;
  metadata?: Record<string, any>;
};

export async function getSession() {
  const session = await auth.getSession();
  if (!session) {
    return null;
  }
  return session.user as User;
}
