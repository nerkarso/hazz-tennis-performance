import Link from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement } from 'react';

export default function ActiveLink({ children, activeClassName, exact, ...props }) {
  const { asPath, pathname } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  let className = pathname.includes(props.href) || asPath.includes(props.as) ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  if (exact) className = pathname === props.href || asPath === props.as || asPath === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName;

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
}
