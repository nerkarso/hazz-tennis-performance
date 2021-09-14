import FeedbackMessage from '@/components/FeedbackMessage';
import cx from 'classnames';

export default function FeedbackMessages({ feedbackId, className, items }) {
  return (
    <ul className={cx('flex flex-col gap-2', className)}>
      {items.map((item, i) => (
        <FeedbackMessage feedbackId={feedbackId} data={item} key={i} />
      ))}
    </ul>
  );
}
