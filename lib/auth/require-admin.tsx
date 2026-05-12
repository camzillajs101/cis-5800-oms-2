import { getSession } from './session';
import { redirect } from 'next/navigation';

export async function RequireAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSession();

  if (!user) {
    redirect('/auth/sign-in');
  }

  if (user.role !== 'admin') {
    redirect('/');
  }

  return <>{children}</>;
}
