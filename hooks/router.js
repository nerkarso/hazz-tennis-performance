import { useRouter } from 'next/router';

export function usePath() {
  const { asPath } = useRouter();
  return {
    basePath: asPath.split('/')[1],
  };
}
