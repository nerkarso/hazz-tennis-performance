export default function DashboardContent({ children, header }) {
  return (
    <main className="flex-1 p-8 overflow-y-auto dark:bg-neutral-900">
      {header && typeof header === 'string' ? <h1 className="mb-6 text-3xl font-bold">{header}</h1> : header}
      {children}
    </main>
  );
}
