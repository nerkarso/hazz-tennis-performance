import { Children } from 'react';

export default function ListItem({ children, component: Component, ...props }) {
  const hasEndComponent = children.length && children[children.length - 1].type.name === 'ListItemEnd';
  const childrenArray = Children.toArray(children);
  const endComponent = hasEndComponent && childrenArray.pop();

  return (
    <li className="relative">
      <Component {...props}>{childrenArray}</Component>
      {hasEndComponent && endComponent}
    </li>
  );
}
