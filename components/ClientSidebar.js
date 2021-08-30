import DashboardSidebar from '@/components/DashboardSidebar';
import { AnnotationIcon, CalendarIcon, ChatAlt2Icon, HomeIcon, LogoutIcon } from '@heroicons/react/outline';

export default function ClientSidebar() {
  return (
    <DashboardSidebar
      links={[
        {
          href: '/client/dashboard',
          text: 'Dashboard',
          icon: HomeIcon,
        },
        {
          href: '/client/bookings',
          text: 'Bookings',
          icon: CalendarIcon,
        },
        {
          href: '/client/chats',
          text: 'Chats',
          icon: ChatAlt2Icon,
        },
        {
          href: '/client/feedbacks',
          text: 'Feedbacks',
          icon: AnnotationIcon,
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
