'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { signInWithEmail } from './actions';

export default function SignInPage() {
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        Sign In
      </h1>
      <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
        Welcome back to our store
      </p>

      {state?.error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-700 dark:text-red-400 text-sm">{state.error}</p>
        </div>
      )}

      <form action={formAction} className="space-y-4 mb-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-medium py-2 rounded-lg transition-colors"
        >
          {isPending ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <p className="text-center text-slate-600 dark:text-slate-400">
        Don&apos;t have an account?{' '}
        <Link
          href="/auth/sign-up"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
