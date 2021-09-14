import { Table, TableCell, TableRow } from '@/elements';
import cx from 'classnames';
import { format } from 'date-fns';

export default function ActivitiesTable({ rows }) {
  const gridTemplateColumns = '2rem 1fr 14rem';

  const getActionText = (action, status) => {
    if (action === 'ACCOUNT_NOT_FOUND') {
      return 'has attempted to sign in but account does not exist.';
    }
    if (action === 'RESET_PASSWORD') {
      return 'has performed a password reset.';
    }
    if (action === 'SIGN_IN' && status === 1) {
      return 'has successfully signed in.';
    }
    if (action === 'SIGN_IN' && status === -1) {
      return 'has failed to sign in.';
    }
    if (action === 'SIGN_OUT') {
      return 'has signed out.';
    }
    if (action === 'SIGN_UP') {
      return 'has created a new account.';
    }
    return `has performed a ${action}.`;
  };

  return (
    <Table>
      {rows.map(({ action, created_at, status, user, user_alt }, i) => (
        <TableRow style={{ gridTemplateColumns }} key={i}>
          <TableCell>
            <span
              className={cx('block w-3 h-3 mx-auto mt-1 rounded-full', {
                'bg-green-600 dark:bg-green-500': status === 1,
                'bg-red-600 dark:bg-red-500': status === -1,
                'bg-neutral-500': status === 0,
              })}></span>
          </TableCell>
          <TableCell>
            {user ? (
              <span>
                {user.first_name} {user.last_name}
              </span>
            ) : user_alt ? (
              user_alt
            ) : (
              'Unknown account'
            )}{' '}
            {getActionText(action, status)}
          </TableCell>
          <TableCell className="text-right text-neutral-600 dark:text-neutral-400">{format(new Date(created_at), 'MMM dd, y HH:mm:ss aa')}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
