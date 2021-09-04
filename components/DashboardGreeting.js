import { Avatar } from '@/elements';
import { UserCircleIcon } from '@heroicons/react/outline';

export default function DashboardGreeting({ imageUrl, firstName, lastName, role }) {
  return (
    <header className="flex items-center gap-4 mb-4">
      <Avatar src={imageUrl} initials={firstName[0]} size="4xl" />
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">
          Welcome back, {firstName} {lastName}
        </h1>
        <div className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
          <UserCircleIcon className="w-5 h-5" />
          <span className="font-medium">{role}</span>
        </div>
      </div>
    </header>
  );
}
