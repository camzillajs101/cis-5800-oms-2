'use client';

import { authClient } from '@/lib/auth/client';

type Provider = 'google' | 'github';

interface OAuthButtonProps {
  provider: Provider;
}

const providerConfig = {
  google: {
    label: 'Sign in with Google',
    icon: '🔍',
    color: 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600',
  },
  github: {
    label: 'Sign in with GitHub',
    icon: '🐙',
    color: 'bg-slate-900 dark:bg-slate-700 text-white',
  },
};

export default function OAuthButton({ provider }: OAuthButtonProps) {
  const config = providerConfig[provider];

  const handleOAuthSignIn = async () => {
    try {
      await authClient.signInWithOAuth({
        provider,
        redirectUrl: '/',
      });
    } catch (error) {
      console.error(`OAuth sign in failed for ${provider}:`, error);
    }
  };

  return (
    <button
      onClick={handleOAuthSignIn}
      className={`w-full px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-90 flex items-center justify-center gap-2 ${config.color}`}
    >
      <span>{config.icon}</span>
      {config.label}
    </button>
  );
}
