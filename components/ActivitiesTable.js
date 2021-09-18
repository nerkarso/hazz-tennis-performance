import { Table, TableCell, TableRow } from '@/elements';
import cx from 'classnames';
import { format } from 'date-fns';

export default function ActivitiesTable({ gridTemplateColumns, rows }) {
  const getActionText = (action, status) => {
    if (action === 'RESET_PASSWORD') {
      return 'has performed a password reset.';
    }
    if (action === 'SIGN_IN' && status === -1) {
      return 'has attempted to sign in with a wrong password.';
    }
    if (action === 'SIGN_IN') {
      return 'has successfully signed in.';
    }
    if (action === 'SIGN_OUT') {
      return 'has signed out.';
    }
    return `has performed a ${action}.`;
  };

  return (
    <Table>
      {rows.map(({ action, created_at, status, user }, i) => (
        <TableRow style={{ gridTemplateColumns }} key={i}>
          <TableCell>
            <span
              className={cx('block w-3 h-3 mx-auto rounded-full', {
                'bg-green-600 dark:bg-green-500': status === 1,
                'bg-red-600 dark:bg-red-500': status === -1,
                'bg-neutral-400 dark:bg-neutral-600': status === 0,
              })}></span>
          </TableCell>
          <TableCell>
            <span className="mr-1 font-semibold">{user ? `${user.first_name} ${user.last_name}` : 'Unknown account'}</span>
            {getActionText(action, status)}
          </TableCell>
          <TableCell className="text-sm text-right text-neutral-600 dark:text-neutral-400">{format(new Date(created_at), 'MMM dd, y HH:mm:ss aa')}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
