export default function ListItem({ children, component: Component, ...props }) {
  const hasEndComponent = children.length && children[children.length - 1].type.name === 'ListItemEnd';
  const endComponent = hasEndComponent && Array.from(children).pop();

  return (
    <li className="relative">
      <Component {...props}>{children}</Component>
      {hasEndComponent && endComponent}
    </li>
  );
}
