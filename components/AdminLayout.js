import ProtectedRoute from '@/components/ProtectedRoute';
import { SocketProvider } from '@/contexts';

export default function AdminLayout({ sidebar, children }) {
  return (
    <ProtectedRoute>
      <SocketProvider>
        <div className="flex h-screen">
          {sidebar && sidebar}
          {children}
        </div>
      </SocketProvider>
    </ProtectedRoute>
  );
}
