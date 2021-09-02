import { Button } from '@/elements';
import Link from 'next/link';

export default function TableActionButton({ children, href, ...props }) {
  if (href) {
    return (
      <Link href={href} passHref>
        <Button component="a" variant="solid" size="sm" {...props}>
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button variant="solid" size="sm" {...props}>
      {children}
    </Button>
  );
}
