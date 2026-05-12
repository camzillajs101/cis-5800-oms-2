import { getSession } from './session';
import { redirect } from 'next/navigation';

export async function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSession();

  if (!user) {
    redirect('/auth/sign-in');
  }

  return <>{children}</>;
}
