import { Button } from '@/elements';
import { usePath } from '@/hooks';
import { PlusIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function ButtonNewResource({ children }) {
  const { basePath, resourcePath } = usePath();

  return (
    <Link href={`/${basePath}/${resourcePath}/new`} passHref>
      <Button component="a" color="primary" variant="solid" icon={PlusIcon}>
        {children}
      </Button>
    </Link>
  );
}
