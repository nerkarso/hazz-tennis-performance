import { Avatar, Table, TableActionButton, TableActions, TableCell, TableHead, TableRow } from '@/elements';
import { usePath, useUserDelete } from '@/hooks';
import { toast } from 'react-hot-toast';

export default function ClientsTable({ enableDelete, enableShow, enableEdit, rows }) {
  const { basePath } = usePath();
  const { mutate } = useUserDelete();

  const handleDelete = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Client deleted');
        }
      },
    });
  };

  return (
    <Table>
      <TableHead className="grid-cols-5">
        <TableCell>Client</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Address</TableCell>
      </TableHead>
      {rows.map(({ _id, address, email, first_name, image_url, last_name, phone }, i) => (
        <TableRow className="grid-cols-5" key={i}>
          <TableCell className="flex items-center gap-3">
            <Avatar src={image_url} initials={first_name[0]} size="md" />
            <span className="truncate">
              {first_name} {last_name}
            </span>
          </TableCell>
          <TableCell>{email}</TableCell>
          <TableCell>{phone}</TableCell>
          <TableCell>{address}</TableCell>
          <TableActions>
            {enableShow && (
              <TableActionButton color="primary" href={`/${basePath}/clients/${_id}`}>
                Show
              </TableActionButton>
            )}
            {enableEdit && (
              <TableActionButton color="primary" href={`/${basePath}/clients/${_id}`}>
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
