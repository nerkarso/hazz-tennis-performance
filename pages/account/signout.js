import { useRouter } from 'next/router';
import { useEffect } from 'react';

SignOut.title = 'Sign out';

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    window.document.cookie = 'account_id=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.document.cookie = 'account_role=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setTimeout(() => {
      router.replace('/account/signin');
    });
  }, [router]);

  return null;
}
