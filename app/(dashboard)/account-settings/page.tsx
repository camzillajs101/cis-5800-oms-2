'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRequireAuth } from '@/lib/auth/use-require-auth';

export default function AccountSettingsPage() {
  const { user, loading } = useRequireAuth();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [newsletters, setNewsletters] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    try {
      // Mock: In production, call an API to save preferences
      console.log('[MOCK] Saving preferences:', {
        emailNotifications,
        orderUpdates,
        newsletters,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Failed to save preferences:', error);
    }
  };

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
          <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            Account Settings
          </h1>

          {saved && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
              <p className="text-green-700 dark:text-green-400 text-sm">
                ✓ Settings saved successfully
              </p>
            </div>
          )}

          <div className="space-y-8">
            {/* Email Notifications Section */}
            <div className="border-b border-slate-200 dark:border-slate-700 pb-8">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Email Notifications
              </h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-slate-700 dark:text-slate-300">
                    Send me email notifications for important account updates
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={orderUpdates}
                    onChange={(e) => setOrderUpdates(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-slate-700 dark:text-slate-300">
                    Notify me about order updates and shipping status
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newsletters}
                    onChange={(e) => setNewsletters(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-slate-700 dark:text-slate-300">
                    Subscribe to our newsletter for deals and promotions
                  </span>
                </label>
              </div>
            </div>

            {/* Security Section */}
            <div className="pb-8">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Security
              </h2>
              <Link
                href="/profile/change-password"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                Change Password →
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Save Settings
            </button>
            <Link
              href="/profile"
              className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              Cancel
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
