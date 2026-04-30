import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
