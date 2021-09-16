import { Avatar, Table, TableActionButton, TableActions, TableCell, TableHead, TableRow } from '@/elements';
import { usePath, useUserDelete } from '@/hooks';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

export default function UsersTable({ enableDelete, enableShow, enableEdit, gridTemplateColumns, rows }) {
  const { basePath, resourcePath } = usePath();
  const { mutate } = useUserDelete();

  const handleDelete = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('User deleted');
        }
      },
    });
  };

  return (
    <Table>
      <TableHead style={{ gridTemplateColumns }}>
        <TableCell>User</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Address</TableCell>
        <TableCell className="text-right">Created at</TableCell>
      </TableHead>
      {rows.map(({ _id, address, created_at, email, first_name, image_url, last_name, phone }, i) => (
        <TableRow style={{ gridTemplateColumns }} key={i}>
          <TableCell className="flex items-center gap-3">
            <Avatar src={image_url} initials={first_name[0]} size="lg" />
            <div className="overflow-hidden">
              <p className="font-medium truncate">
                {first_name} {last_name}
              </p>
              <p className="text-sm truncate text-neutral-600 dark:text-neutral-400">{email}</p>
            </div>
          </TableCell>
          <TableCell>{phone}</TableCell>
          <TableCell>{address}</TableCell>
          <TableCell className="text-right">{format(new Date(created_at), 'MMM dd, y HH:mm aa')}</TableCell>
          <TableActions>
            {enableShow && (
              <TableActionButton color="primary" href={`/${basePath}/${resourcePath}/${_id}`}>
                Show
              </TableActionButton>
            )}
            {enableEdit && (
              <TableActionButton color="primary" href={`/${basePath}/${resourcePath}/${_id}`}>
                Edit
              </TableActionButton>
            )}
            {enableDelete && (
              <TableActionButton color="neutral" onClick={() => handleDelete(_id)}>
                Delete
              </TableActionButton>
            )}
          </TableActions>
        </TableRow>
      ))}
    </Table>
  );
}
