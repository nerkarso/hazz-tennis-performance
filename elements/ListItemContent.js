export default function ListItemContent({ children }) {
  return <div className="flex flex-col flex-1 gap-1">{children && children}</div>;
}
