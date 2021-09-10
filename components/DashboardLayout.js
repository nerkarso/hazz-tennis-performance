import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardLayout({ sidebar, children }) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        {sidebar && sidebar}
        {children}
      </div>
    </ProtectedRoute>
  );
}
