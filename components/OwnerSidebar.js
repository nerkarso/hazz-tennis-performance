import DashboardSidebar from '@/components/DashboardSidebar';
import { AnnotationIcon, CalendarIcon, ChatAlt2Icon, ClockIcon, HomeIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/outline';

export default function OwnerSidebar() {
  return (
    <DashboardSidebar
      links={[
        {
          href: '/owner/dashboard',
          text: 'Dashboard',
          icon: HomeIcon,
        },
        {
          href: '/owner/bookings',
          text: 'Bookings',
          icon: CalendarIcon,
        },
        {
          href: '/owner/coaching-hours',
          text: 'Coaching hours',
          icon: ClockIcon,
        },
        {
          href: '/owner/chats',
          text: 'Chats',
          icon: ChatAlt2Icon,
        },
        {
          href: '/owner/feedbacks',
          text: 'Feedbacks',
          icon: AnnotationIcon,
        },
        {
          href: '/owner/coaches',
          text: 'Coaches',
          icon: UsersIcon,
        },
        {
          href: '/owner/clients',
          text: 'Clients',
          icon: UserGroupIcon,
        },
      ]}
    />
  );
}
