import { Button, SkeletonButton } from '@/elements';
import cx from 'classnames';

export default function FormActions({ className, isLoading, loadingText, onCancel = () => window.history.back(), submitText }) {
  return (
    <div className={cx('grid self-end w-2/3 grid-flow-col gap-2 mt-4', className)}>
      {isLoading ? (
        <SkeletonButton animate>{loadingText}</SkeletonButton>
      ) : (
        <Button type="submit" color="primary" variant="solid">
          {submitText}
        </Button>
      )}
      <Button type="button" onClick={onCancel} color="neutral" variant="solid">
        Cancel
      </Button>
    </div>
  );
}
