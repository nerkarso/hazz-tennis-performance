import { Button, SkeletonButton } from '@/elements';
import { usePath } from '@/hooks';
import cx from 'classnames';
import Link from 'next/link';

export default function FormActions({ className, isLoading, loadingText, onCancel, submitText }) {
  const { basePath, resourcePath } = usePath();

  return (
    <div className={cx('grid self-end w-2/3 grid-flow-col gap-2 mt-4', className)}>
      {isLoading ? (
        <SkeletonButton animate>{loadingText}</SkeletonButton>
      ) : (
        <Button type="submit" color="primary" variant="solid">
          {submitText}
        </Button>
      )}
      {onCancel ? (
        <Button onClick={onCancel} color="neutral" variant="solid">
          Cancel
        </Button>
      ) : (
        <Link href={`/${basePath}/${resourcePath}`} passHref>
          <Button component="a" color="neutral" variant="solid">
            Cancel
          </Button>
        </Link>
      )}
    </div>
  );
}
