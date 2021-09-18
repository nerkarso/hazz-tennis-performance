import { Checkbox } from '@/elements';
import { useCurrentBooking } from '@/hooks';
import { useEffect } from 'react';

export default function SendNotificationsCard() {
  const { currentBooking, updateCurrentBooking } = useCurrentBooking();

  useEffect(() => {
    return () => {
      updateCurrentBooking({
        notify_client: false,
        notify_coach: false,
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg dark:border-neutral-700">
      <label className="flex items-center gap-2">
        <Checkbox checked={currentBooking?.notify_client} onChange={(e) => updateCurrentBooking({ notify_client: JSON.parse(e.target.checked) })} />
        <span className="text-neutral-600 dark:text-neutral-400">Send notification to client</span>
      </label>
      <label className="flex items-center gap-2">
        <Checkbox checked={currentBooking?.notify_coach} onChange={(e) => updateCurrentBooking({ notify_coach: JSON.parse(e.target.checked) })} />
        <span className="text-neutral-600 dark:text-neutral-400">Send notification to coach</span>
      </label>
    </div>
  );
}
