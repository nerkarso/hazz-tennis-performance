import { Badge, Table, TableActionButton, TableActions, TableCell, TableHead, TableRow } from '@/elements';
import { useBookingDelete, usePath } from '@/hooks';
import { formatDate } from '@/lib';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function BookingsTable({ cols = [], enableDelete, enableEdit, enableEditOrShow, enableShow, gridTemplateColumns, rows }) {
  const { basePath } = usePath();
  const { mutate } = useBookingDelete();

  const handleDelete = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Booking deleted');
        }
      },
    });
  };

  return (
    <Table>
      <TableHead style={{ gridTemplateColumns }}>
        {cols.map((col, i) => (
          <TableCell key={i}>
            {col === 'date_time' && 'Date'}
            {col === 'client' && 'Client'}
            {col === 'client_link' && 'Client'}
            {col === 'coach' && 'Coach'}
            {col === 'coach_link' && 'Coach'}
            {col === 'booking_status' && 'Status'}
            {col === 'total_fees' && 'Total fees'}
            {col === 'payment_type' && 'Payment type'}
            {col === 'payment_status' && 'Payment status'}
            {col === 'location' && 'Location'}
            {col === 'location_link' && 'Location'}
          </TableCell>
        ))}
      </TableHead>
      {rows.map(({ _id, booking_status, client, coach, date_time, location, payment_status, payment_type, total_fees }, i) => (
        <TableRow style={{ gridTemplateColumns }} key={i}>
          {cols.map((col, i) => (
            <TableCell key={i}>
              {col === 'date_time' && formatDate(date_time)}
              {col === 'client' && `${client?.first_name} ${client?.last_name}`}
              {col === 'client_link' && (
                <Link href={`/${basePath}/clients/${client?._id}`}>
                  <a className="link">
                    {client?.first_name} {client?.last_name}
                  </a>
                </Link>
              )}
              {col === 'coach' && `${coach?.first_name} ${coach?.last_name}`}
              {col === 'coach_link' && (
                <Link href={`/${basePath}/coaches/${coach?._id}`}>
                  <a className="link">
                    {coach?.first_name} {coach?.last_name}
                  </a>
                </Link>
              )}
              {col === 'booking_status' && (
                <>
                  {booking_status === -1 && <Badge color="red">Declined</Badge>}
                  {booking_status === 0 && <Badge color="yellow">Pending</Badge>}
                  {booking_status === 1 && <Badge color="green">Approved</Badge>}
                </>
              )}
              {col === 'total_fees' && `$ ${total_fees}`}
              {col === 'payment_type' && <span className="capitalize">{payment_type}</span>}
              {col === 'payment_status' && (
                <>
                  {payment_status === false && <Badge color="yellow">Pending</Badge>}
                  {payment_status === true && <Badge color="green">Paid</Badge>}
                </>
              )}
              {col === 'location' && location?.name}
              {col === 'location_link' && (
                <Link href={`/${basePath}/courts/${location?._id}`}>
                  <a className="link">{location?.name}</a>
                </Link>
              )}
            </TableCell>
          ))}
          {enableDelete || enableEdit || enableEditOrShow || enableShow ? (
            <TableActions>
              {enableEditOrShow && (
                <>
                  {booking_status === 0 ? (
                    <TableActionButton color="primary" href={`/${basePath}/bookings/${_id}`}>
                      Edit
                    </TableActionButton>
                  ) : (
                    <TableActionButton color="primary" href={`/${basePath}/bookings/${_id}/details`}>
                      Show
                    </TableActionButton>
                  )}
                </>
              )}
              {enableShow && (
                <TableActionButton color="primary" href={`/${basePath}/bookings/${_id}/details`}>
                  Show
                </TableActionButton>
              )}
              {enableEdit && (
                <TableActionButton color="primary" href={`/${basePath}/bookings/${_id}`}>
                  Edit
                </TableActionButton>
              )}
              {enableDelete && (
                <TableActionButton color="neutral" onClick={() => handleDelete(_id)}>
                  Delete
                </TableActionButton>
              )}
            </TableActions>
          ) : null}
        </TableRow>
      ))}
    </Table>
  );
}
