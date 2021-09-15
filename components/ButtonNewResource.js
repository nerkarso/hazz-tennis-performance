import { Button } from '@/elements';
import { usePath } from '@/hooks';
import { PlusIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function ButtonNewResource({ children, resource, ...props }) {
  const { basePath, resourcePath } = usePath();

  return (
    <Link href={`/${basePath}/${resource ? resource : resourcePath}/new`} passHref>
      <Button component="a" color="primary" variant="solid" icon={PlusIcon} {...props}>
        {children}
      </Button>
    </Link>
  );
}
