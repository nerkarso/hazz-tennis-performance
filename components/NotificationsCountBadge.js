import { useAuth, useNotificationsCount } from '@/hooks';

export default function NotificationsCountBadge() {
  const { accountId } = useAuth();
  const { data } = useNotificationsCount(accountId);

  if (data?.count > 0) {
    return <span className="absolute top-0 right-0 grid h-4 px-1 text-xs font-bold text-white translate-x-1 bg-red-600 rounded-full place-items-center dark:bg-red-500">{data?.count}</span>;
  }

  return null;
}
