import AdminSidebar from '@/components/AdminSidebar';
import ButtonNewResource from '@/components/ButtonNewResource';
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
      ]}>
      <div className="mx-4 mb-4">
        <ButtonNewResource className="pl-3 pr-4" resource="bookings">
          New booking
        </ButtonNewResource>
      </div>
    </AdminSidebar>
  );
}
