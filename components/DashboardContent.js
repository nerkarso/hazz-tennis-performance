export default function DashboardContent({ children, header, toolbar }) {
  return (
    <main className="flex-1 p-8 overflow-y-auto dark:bg-neutral-900 dark:text-white">
      <div className="flex items-center gap-2 mb-6">
        {header && typeof header === 'string' ? <h1 className="text-3xl font-bold">{header}</h1> : header}
        <div className="flex items-center justify-end gap-2 ml-auto">{toolbar}</div>
      </div>
      {children}
    </main>
  );
}
