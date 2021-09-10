import ProtectedRoute from '@/components/ProtectedRoute';

export default function AdminLayout({ sidebar, children }) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        {sidebar && sidebar}
        {children}
      </div>
    </ProtectedRoute>
  );
}
