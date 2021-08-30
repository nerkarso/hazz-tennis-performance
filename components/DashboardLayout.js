export default function DashboardLayout({ sidebar, children }) {
  return (
    <div className="flex h-screen">
      {sidebar && sidebar}
      {children}
    </div>
  );
}
