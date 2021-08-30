export default function DashboardLayout({ sidebar, children }) {
  return (
    <div className="flex h-screen">
      {sidebar && sidebar}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
