import AdminSidebar from '@/components/AdminSidebar';
import { AnnotationIcon, CalendarIcon, ChatAlt2Icon, CurrencyDollarIcon, HomeIcon } from '@heroicons/react/outline';

export default function ClientSidebar() {
  return (
    <AdminSidebar
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
          href: '/client/payments',
          text: 'Payments',
          icon: CurrencyDollarIcon,
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
      ]}
    />
  );
}
