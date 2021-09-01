import { EmptyStateTitle, EmptyStateView } from '@/elements';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

SignOut.title = 'Sign out';

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/account/signin');
    }, 2000);
  }, []);

  return (
    <EmptyStateView fullScreen>
      <EmptyStateTitle className="animate-pulse">Signing out...</EmptyStateTitle>
    </EmptyStateView>
  );
}
