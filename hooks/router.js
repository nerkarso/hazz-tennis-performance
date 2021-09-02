import { useRouter } from 'next/router';

export function usePath() {
  const { asPath } = useRouter();
  const paths = asPath.split('/');
  return {
    basePath: paths[1],
    resourcePath: paths[2],
  };
}
