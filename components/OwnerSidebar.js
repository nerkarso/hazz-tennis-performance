import AdminSidebar from '@/components/AdminSidebar';
import { AnnotationIcon, CalendarIcon, ChatAlt2Icon, ClockIcon, HomeIcon, LockClosedIcon, MapIcon, UsersIcon } from '@heroicons/react/outline';

export default function OwnerSidebar() {
  return (
    <AdminSidebar
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
          href: '/owner/clients',
          text: 'Clients',
          icon: UsersIcon,
        },
        {
          href: '/owner/coaches',
          text: 'Coaches',
          icon: UsersIcon,
        },
        {
          href: '/owner/owners',
          text: 'Owners',
          icon: UsersIcon,
        },
        {
          href: '/owner/courts',
          text: 'Courts',
          icon: MapIcon,
        },
        {
          href: '/owner/security-log',
          text: 'Security log',
          icon: LockClosedIcon,
        },
      ]}
    />
  );
}
