import { Avatar, EmptyStateTitle, EmptyStateView } from '@/elements';
import { useAuth, useUserAccount } from '@/hooks';
import { UserCircleIcon } from '@heroicons/react/outline';
import cx from 'classnames';

export default function DashboardGreeting() {
  const { accountId } = useAuth();
  const { data, error, isError, isLoading } = useUserAccount(accountId);

  if (isLoading) return <Skeleton animate />;

  if (isError) {
    return (
      <EmptyStateView>
        <EmptyStateTitle>{error.message}</EmptyStateTitle>
      </EmptyStateView>
    );
  }

  if (data?.error) {
    return (
      <EmptyStateView>
        <EmptyStateTitle>{data?.error}</EmptyStateTitle>
      </EmptyStateView>
    );
  }

  if (data) {
    const { image_url, first_name, last_name, role } = data;

    return (
      <header className="flex items-center gap-4 mb-4">
        <Avatar src={image_url} initials={first_name[0]} size="4xl" />
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">
            Welcome back, {first_name} {last_name}
          </h1>
          <div className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
            <UserCircleIcon className="w-5 h-5" />
            <span className="font-medium capitalize">{role}</span>
          </div>
        </div>
      </header>
    );
  }

  return <Skeleton />;
}

function Skeleton({ animate }) {
  return (
    <header className={cx('flex items-center gap-4 mb-4', { 'animate-pulse': animate })}>
      <div className="flex-shrink-0 w-20 h-20 rounded-full dark:bg-neutral-800 bg-neutral-200"></div>
      <div className="flex flex-col gap-2">
        <h1 className="h-8 rounded-md dark:bg-neutral-800 bg-neutral-200 w-60"></h1>
        <div className="flex items-center gap-1">
          <span className="w-5 h-5 rounded-full dark:bg-neutral-800 bg-neutral-200"></span>
          <span className="w-20 h-5 rounded-md dark:bg-neutral-800 bg-neutral-200"></span>
        </div>
      </div>
    </header>
  );
}
