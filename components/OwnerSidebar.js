import BaseSidebar from '@/components/BaseSidebar';
import { AnnotationIcon, CalendarIcon, ChatAlt2Icon, CreditCardIcon, HomeIcon, LogoutIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/outline';

export default function OwnerSidebar() {
  return (
    <BaseSidebar
      basePath="/owner"
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
          href: '/owner/payments',
          text: 'Payments',
          icon: CreditCardIcon,
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
        {
          href: '/account/signout',
          text: 'Sign out',
          icon: LogoutIcon,
        },
      ]}
    />
  );
}
