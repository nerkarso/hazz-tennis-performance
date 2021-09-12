import { Avatar, Button, StarRating } from '@/elements';
import { useAuth, useFeedbackDelete, useFeedbackReplyDelete } from '@/hooks';
import cx from 'classnames';
import { formatDistanceToNowStrict } from 'date-fns';
import toast from 'react-hot-toast';

export default function FeedbackMessage({ data, feedbackId, isIndented }) {
  const { _id: replyId, created_at, message, rating, user } = data;
  const { _id: userId, first_name, image_url, last_name, role } = user;
  const { accountId } = useAuth();
  const feedback = useFeedbackDelete();
  const reply = useFeedbackReplyDelete();

  const onSuccessDelete = (data) => {
    if (data?.error) {
      toast.error(data.error);
    } else {
      toast.success('Feedback message deleted');
    }
  };

  const handleDelete = () => {
    if (replyId) {
      reply.mutate(
        {
          feedbackId: feedbackId,
          replyId: replyId,
        },
        { onSuccess: onSuccessDelete },
      );
    } else {
      feedback.mutate(feedbackId, { onSuccess: onSuccessDelete });
    }
  };

  return (
    <li
      className={cx('flex gap-2', {
        'ml-16': isIndented,
      })}>
      <div className="flex-grow-0 flex-shrink-0">
        <Avatar src={image_url} initials={first_name[0]} size="2xl" />
      </div>
      <div className="flex-grow-0">
        <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          <div className="flex items-center gap-2 mb-1">
            <h5 className="font-semibold">
              {first_name} {last_name}
            </h5>
            {role === 'owner' && <span className="text-sm font-semibold capitalize text-primary-600 dark:text-primary-500">({role})</span>}
            {rating && <StarRating value={rating} size="xs" disabled />}
          </div>
          <p className="text-neutral-700 dark:text-neutral-300">{message}</p>
        </div>
        <div className="flex items-center h-8 gap-4">
          <time className="inline-block ml-2 text-sm font-medium dark:text-neutral-400 text-neutral-500">{formatDistanceToNowStrict(new Date(created_at))} ago</time>
          {accountId === userId && (
            <>
              {feedback.isLoading || reply.isLoading ? (
                <span className="flex-grow-0 text-sm font-medium text-neutral-400 dark:text-neutral-500">Deleting...</span>
              ) : (
                <Button onClick={handleDelete} className="px-0 font-medium" color="neutral" size="sm">
                  Delete
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}
