import cx from 'classnames';

export default function DetailsView({ children, className }) {
  return <section className={cx('flex-1', className)}>{children}</section>;
}

export function DetailsViewHeader({ children, className }) {
  return <header className={cx('flex items-center flex-shrink-0 h-20 px-6', className)}>{children}</header>;
}

export function DetailsViewMain({ children, className }) {
  return <main className={cx('flex-1 overflow-y-auto', className)}>{children}</main>;
}

export function DetailsViewFooter({ children, className }) {
  return <footer className={cx('flex items-center flex-shrink-0 h-20 px-6', className)}>{children}</footer>;
}
