import { SkeletonAdminLayout } from '@/elements';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { isLoading, isAuth, isForbidden, signIn, signOut } = useAuth();

  useEffect(() => {
    signIn();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuth && isForbidden) {
        signOut();
        router.replace('/account/signin');
      } else if (!isAuth) {
        signOut();
        router.replace({
          pathname: '/account/signin',
          query: 'error=unauthorized',
        });
      } else if (isForbidden) {
        signOut();
        router.replace({
          pathname: '/account/signin',
          query: 'error=forbidden',
        });
      }
    }
  }, [isLoading, isAuth, isForbidden, router, signOut]);

  if (!isLoading && isAuth && !isForbidden) return children;

  return <SkeletonAdminLayout />;
}
