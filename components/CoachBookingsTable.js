import { Badge, Button, Table, TableCell, TableHead, TableRow } from '@/elements';
import Link from 'next/link';

export default function CoachBookingsTable({ rows }) {
  return (
    <Table>
      <TableHead className="grid-cols-8">
        <TableCell className="col-span-2">Date</TableCell>
        <TableCell className="col-span-2">Client</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Payment</TableCell>
        <TableCell>Total fees</TableCell>
      </TableHead>
      {rows.map((x, i) => (
        <TableRow className="grid-cols-8" key={i}>
          <TableCell className="col-span-2">Monday Aug 1{i}, 2021 12:00 AM</TableCell>
          <TableCell className="col-span-2">
            <Link href={`/coach/clients/1`}>
              <a className="link">Maria Sharapova</a>
            </Link>
          </TableCell>
          <TableCell>{i % 2 === 0 ? <Badge color="green">Approved</Badge> : i % 3 === 0 ? <Badge color="yellow">Pending</Badge> : <Badge color="red">Declined</Badge>}</TableCell>
          <TableCell>{i % 2 === 0 ? <Badge color="green">Paid</Badge> : <Badge color="yellow">Pending</Badge>}</TableCell>
          <TableCell>$ {i}0.00</TableCell>
          <TableCell className="flex items-center justify-end col-span-2 gap-2">
            <Link href={`/coach/bookings/1`} passHref>
              <Button component="a" color="primary" variant="solid" size="sm">
                View details
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
