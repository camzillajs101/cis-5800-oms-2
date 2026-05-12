'use client';

import Link from 'next/link';
import { useRequireAuth } from '@/lib/auth/use-require-auth';

export default function ProfilePage() {
  const { user, loading } = useRequireAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
            My Profile
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            View and manage your account information
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <p className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg">
                {user.email}
              </p>
            </div>

            {user.email_verified !== false && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-700 dark:text-green-400 text-sm font-medium">
                  ✓ Email verified
                </p>
              </div>
            )}

            {user.role && (
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Account Type
                </label>
                <p className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg capitalize">
                  {user.role === 'admin' ? 'Administrator' : 'Customer'}
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href="/profile/edit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Edit Profile
            </Link>
            <Link
              href="/profile/change-password"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              Change Password
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="text-blue-600 hover:underline text-sm"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
