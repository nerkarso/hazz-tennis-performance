import BaseSidebar from '@/components/BaseSidebar';
import { CalendarIcon, ChatAlt2Icon, HomeIcon, LogoutIcon } from '@heroicons/react/outline';

export default function CoachSidebar() {
  return (
    <BaseSidebar
      basePath="/coach"
      links={[
        {
          href: '/coach/dashboard',
          text: 'Dashboard',
          icon: HomeIcon,
        },
        {
          href: '/coach/bookings',
          text: 'Bookings',
          icon: CalendarIcon,
        },
        {
          href: '/coach/chats',
          text: 'Chats',
          icon: ChatAlt2Icon,
        },
        {
          href: '/account/signout',
          text: 'Sign out',
          icon: LogoutIcon,
        },
      ]}
    />
  );
}