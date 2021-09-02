import { Button, SkeletonButton } from '@/elements';
import { usePath } from '@/hooks';
import Link from 'next/link';

export default function FormActions({ isLoading, loadingText, submitText }) {
  const { basePath, resourcePath } = usePath();

  return (
    <div className="grid self-end w-2/3 grid-flow-col gap-2 mt-4">
      {isLoading ? (
        <SkeletonButton animate>{loadingText}</SkeletonButton>
      ) : (
        <Button type="submit" color="primary" variant="solid">
          {submitText}
        </Button>
      )}
      <Link href={`/${basePath}/${resourcePath}`} passHref>
        <Button component="a" color="neutral" variant="solid">
          Cancel
        </Button>
      </Link>
    </div>
  );
}
