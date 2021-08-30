import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { Avatar, Badge, Button, Table, TableCell, TableHead, TableRow } from '@/elements';
import { UserCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <PageContent />
    </DashboardLayout>
  );
}

function PageContent() {
  return (
    <main className="flex-1 p-8 overflow-y-auto dark:bg-neutral-900">
      <PageHeader />
      <section>
        <h1 className="mb-4 text-2xl font-bold">Recent bookings</h1>
        <RecentBookingsTable />
      </section>
    </main>
  );
}

function PageHeader() {
  return (
    <header className="flex items-center gap-4 mb-8 dark:border-neutral-700">
      <Avatar src="https://avatars.dicebear.com/api/initials/nd.svg" size="4xl" />
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Welcome back, Novak Djokovic</h1>
        <div className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
          <UserCircleIcon className="w-5 h-5" />
          <span className="font-medium">Owner</span>
        </div>
      </div>
    </header>
  );
}

function RecentBookingsTable() {
  return (
    <Table>
      <TableHead className="grid-cols-6">
        <TableCell>Date</TableCell>
        <TableCell>Client</TableCell>
        <TableCell>Coach</TableCell>
        <TableCell className="text-center">Status</TableCell>
        <TableCell className="text-right">Total fees</TableCell>
      </TableHead>
      {Array.from(Array(9)).map((x, i) => (
        <TableRow className="grid-cols-6" key={i}>
          <TableCell>Aug 1{i}, 2021 12:00 AM</TableCell>
          <TableCell>
            <Link href="/owner/clients/1">
              <a className="link">Novak Djokovic</a>
            </Link>
          </TableCell>
          <TableCell>
            <Link href="/owner/coaches/1">
              <a className="link">Maria Sharapova</a>
            </Link>
          </TableCell>
          <TableCell className="text-center">
            {i % 2 === 0 ? <Badge color="green">Approved</Badge> : i % 3 === 0 ? <Badge color="yellow">Pending</Badge> : <Badge color="red">Declined</Badge>}
          </TableCell>
          <TableCell className="text-right">USD {i}0.00</TableCell>
          <TableCell className="flex items-center justify-end gap-2">
            <Link href="/owner/bookings/1" passHref>
              <Button component="a" color="primary" variant="solid" size="sm">
                Schedule
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
