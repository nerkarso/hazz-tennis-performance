import DashboardSidebar from '@/components/DashboardSidebar';
import { CalendarIcon, ChatAlt2Icon, ClockIcon, HomeIcon } from '@heroicons/react/outline';

export default function CoachSidebar() {
  return (
    <DashboardSidebar
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
          href: '/coach/coaching-hours',
          text: 'Coaching hours',
          icon: ClockIcon,
        },
        {
          href: '/coach/chats',
          text: 'Chats',
          icon: ChatAlt2Icon,
        },
      ]}
    />
  );
}
