import { useCurrentBooking } from '@/hooks';
import { COACHING_FEE } from '@/lib';
import cx from 'classnames';
import { useEffect } from 'react';

export default function TotalFeesCard({ className, amount }) {
  const { currentBooking, setCurrentBooking } = useCurrentBooking();

  useEffect(() => {
    if (amount) {
      setCurrentBooking({
        total_fees: amount,
      });
    }
    return () => {
      setCurrentBooking({
        total_fees: 0,
      });
    };
  }, [amount, setCurrentBooking]);

  return (
    <div className={cx('p-4 border rounded-lg dark:border-neutral-700', className)}>
      <h3 className="mb-2 text-3xl font-bold text-primary-600 dark:text-primary-400">${currentBooking?.total_fees ?? 0}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Coaching fee is ${COACHING_FEE}/hour</p>
    </div>
  );
}
