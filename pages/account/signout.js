import { useRouter } from 'next/router';
import { useEffect } from 'react';

SignOut.title = 'Sign out';

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/account/signin');
    });
  }, [router]);

  return null;
}
