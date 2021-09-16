import { Table, TableActionButton, TableActions, TableCell, TableCellIcon, TableHead, TableRow } from '@/elements';
import { useCourtDelete, usePath } from '@/hooks';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import toast from 'react-hot-toast';

export default function CourtsTable({ gridTemplateColumns, rows }) {
  const { basePath, resourcePath } = usePath();
  const { mutate } = useCourtDelete();

  const handleDelete = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Court deleted');
        }
      },
    });
  };

  return (
    <Table>
      <TableHead style={{ gridTemplateColumns }}>
        <TableCell>Name</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>City</TableCell>
      </TableHead>
      {rows.map(({ _id, address, city, name }, i) => (
        <TableRow style={{ gridTemplateColumns }} key={i}>
          <TableCell className="flex items-center gap-3">
            <TableCellIcon icon={LocationMarkerIcon} />
            <span>{name}</span>
          </TableCell>
          <TableCell>{address}</TableCell>
          <TableCell>{city}</TableCell>
          <TableActions>
            <TableActionButton color="primary" href={`/${basePath}/${resourcePath}/${_id}`}>
              Edit
            </TableActionButton>
            <TableActionButton color="neutral" onClick={() => handleDelete(_id)}>
              Delete
            </TableActionButton>
          </TableActions>
        </TableRow>
      ))}
    </Table>
  );
}
