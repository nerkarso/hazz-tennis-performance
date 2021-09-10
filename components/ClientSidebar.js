import AdminSidebar from '@/components/AdminSidebar';
import { AnnotationIcon, CalendarIcon, ChatAlt2Icon, HomeIcon } from '@heroicons/react/outline';

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
