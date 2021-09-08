import { Table, TableActionButton, TableActions, TableCell, TableHead, TableRow } from '@/elements';
import { useCoachingHourDelete, usePath } from '@/hooks';
import { format } from 'date-fns';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function CoachingHoursTable({ cols, enableDelete, enableShow, enableEdit, gridTemplateColumns, rows }) {
  const { basePath } = usePath();
  const { mutate } = useCoachingHourDelete();

  const handleDelete = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Coaching hour deleted');
        }
      },
    });
  };

  return (
    <Table>
      <TableHead style={{ gridTemplateColumns }}>
        {cols.map((col, i) => (
          <TableCell key={i}>
            {col === 'date' && 'Date'}
            {col === 'coach' && 'Coach'}
            {col === 'coach_link' && 'Coach'}
            {col === 'duration' && 'Duration'}
          </TableCell>
        ))}
      </TableHead>
      {rows.map(({ _id, coach, date, duration }, i) => (
        <TableRow style={{ gridTemplateColumns }} key={i}>
          {cols.map((col, i) => (
            <TableCell key={i}>
              {col === 'coach' && `${coach?.first_name} ${coach?.last_name}`}
              {col === 'coach_link' && (
                <Link href={`/${basePath}/coaches/${coach?._id}`}>
                  <a className="link">
                    {coach?.first_name} {coach?.last_name}
                  </a>
                </Link>
              )}
              {col === 'date' && format(new Date(date), 'd MMM y')}
              {col === 'duration' && duration}
            </TableCell>
          ))}
          {enableDelete || enableEdit || enableShow ? (
            <TableActions>
              {enableShow && (
                <TableActionButton color="primary" href={`/${basePath}/coaching-hours/${_id}`}>
                  Show
                </TableActionButton>
              )}
              {enableEdit && (
                <TableActionButton color="primary" href={`/${basePath}/coaching-hours/${_id}`}>
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
