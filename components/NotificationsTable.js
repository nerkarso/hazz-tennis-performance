import { Table, TableCell, TableCellIcon, TableRow } from '@/elements';
import { BellIcon } from '@heroicons/react/outline';
import cx from 'classnames';
import { format } from 'date-fns';

export default function NotificationsTable({ gridTemplateColumns, rows }) {
  return (
    <Table>
      {rows.map(({ body, created_at, read, title }, i) => (
        <TableRow style={{ gridTemplateColumns }} key={i}>
          <TableCell>
            <TableCellIcon active={!read} icon={BellIcon} />
          </TableCell>
          <TableCell className={cx(read && 'text-neutral-400 dark:text-neutral-600')}>
            {title && <h4 className="font-medium">{title}</h4>}
            {body && <p>{body}</p>}
          </TableCell>
          <TableCell className={cx('text-right', read ? 'text-neutral-400 dark:text-neutral-600' : 'text-neutral-600 dark:text-neutral-400')}>
            {format(new Date(created_at), 'MMM dd, y HH:mm:ss aa')}
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
