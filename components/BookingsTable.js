import { Badge, Button, Table, TableCell, TableHead, TableRow } from '@/elements';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

export default function BookingsTable({ rows }) {
  const { asPath } = useRouter();
  const basePath = asPath.split('/')[1];

  const handleDelete = () => toast.success('Booking deleted');

  return (
    <Table>
      <TableHead className="grid-cols-6">
        <TableCell>Date</TableCell>
        <TableCell>Client</TableCell>
        <TableCell>Coach</TableCell>
        <TableCell className="text-center">Status</TableCell>
        <TableCell className="text-right">Total fees</TableCell>
      </TableHead>
      {rows.map((x, i) => (
        <TableRow className="grid-cols-6" key={i}>
          <TableCell>Aug 1{i}, 2021 12:00 AM</TableCell>
          <TableCell>
            <Link href={`/${basePath}/clients/1`}>
              <a className="link">Novak Djokovic</a>
            </Link>
          </TableCell>
          <TableCell>
            <Link href={`/${basePath}/coaches/1`}>
              <a className="link">Maria Sharapova</a>
            </Link>
          </TableCell>
          <TableCell className="text-center">
            {i % 2 === 0 ? <Badge color="green">Approved</Badge> : i % 3 === 0 ? <Badge color="yellow">Pending</Badge> : <Badge color="red">Declined</Badge>}
          </TableCell>
          <TableCell className="text-right">USD {i}0.00</TableCell>
          <TableCell className="flex items-center justify-end gap-2">
            <Link href={`/${basePath}/bookings/1`} passHref>
              <Button component="a" color="primary" variant="solid" size="sm">
                Edit
              </Button>
            </Link>
            <Button onClick={handleDelete} color="neutral" variant="solid" size="sm">
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
