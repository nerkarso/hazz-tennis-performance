import { StarRating, Table, TableActionButton, TableActions, TableCell, TableHead, TableRow } from '@/elements';
import { useFeedbackDelete, usePath } from '@/hooks';
import { formatDate } from '@/lib';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function FeedbacksTable({ cols = [], enableDelete, enableShow, gridTemplateColumns, rows }) {
  const { basePath } = usePath();
  const { mutate } = useFeedbackDelete();

  const handleDelete = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Feedback deleted');
        }
      },
    });
  };

  return (
    <Table>
      <TableHead style={{ gridTemplateColumns }}>
        {cols.map((col, i) => (
          <TableCell key={i}>
            {col === 'client_link' && 'Client'}
            {col === 'client' && 'Client'}
            {col === 'date_time' && 'Booking date'}
            {col === 'message' && 'Message'}
            {col === 'rating' && 'Rating'}
            {col === 'replies' && 'Replies'}
            {col === 'created_at' && 'Created at'}
          </TableCell>
        ))}
      </TableHead>
      {rows.map(({ _id, booking, message, rating, replies, user: client, created_at }, i) => (
        <TableRow style={{ gridTemplateColumns }} key={i}>
          {cols.map((col, i) => (
            <TableCell key={i}>
              {col === 'client' && `${client?.first_name} ${client?.last_name}`}
              {col === 'client_link' && (
                <Link href={`/${basePath}/clients/${client?._id}`}>
                  <a className="link">
                    {client?.first_name} {client?.last_name}
                  </a>
                </Link>
              )}
              {col === 'created_at' && formatDate(created_at)}
              {col === 'date_time' && booking?.date_time && formatDate(booking?.date_time)}
              {col === 'message' && message}
              {col === 'rating' && (
                <div className="flex items-center">
                  <StarRating value={rating} size="xs" disabled />
                </div>
              )}
              {col === 'replies' && `${replies.length} replies`}
            </TableCell>
          ))}
          {enableDelete || enableShow ? (
            <TableActions>
              {enableShow && booking && (
                <TableActionButton color="primary" href={`/${basePath}/bookings/${booking?._id}/details`}>
                  Show
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
