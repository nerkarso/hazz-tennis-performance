import { useAuth, useNotificationsCount } from '@/hooks';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';

export default function NotificationsCountBadge() {
  const queryClient = useQueryClient();
  const { accountId } = useAuth();
  const { data } = useNotificationsCount(accountId);

  useEffect(() => {
    window?.socket?.on('notification:new', () => {
      queryClient.invalidateQueries('notifications');
      queryClient.invalidateQueries('notificationsCount');
    });
    // eslint-disable-next-line
  }, []);

  if (data?.count > 0) {
    return <span className="absolute top-0 right-0 grid h-4 px-1 text-xs font-bold text-white translate-x-1 bg-red-600 rounded-full place-items-center dark:bg-red-500">{data?.count}</span>;
  }

  return null;
}
