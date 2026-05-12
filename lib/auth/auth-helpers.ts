import type { User } from './session';

export function isAdmin(user: User | null): boolean {
  if (!user) return false;
  return user.role === 'admin';
}

export function extractRole(user: User | null): string | null {
  if (!user) return null;
  return user.role || null;
}

export function getCurrentUserFromCookie(user: User | null): User | null {
  return user;
}

export function isEmailVerified(user: User | null): boolean {
  if (!user) return false;
  return user.email_verified !== false; // Treat undefined as verified by default
}

export function getUserDisplayName(user: User | null): string {
  if (!user) return 'Guest';
  return user.email || 'User';
}
