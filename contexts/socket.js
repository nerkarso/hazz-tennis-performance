import { createContext, useEffect } from 'react';
import toast from 'react-hot-toast';

export const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  useEffect(() => {
    try {
      window.socket = window?.io(process.env.NEXT_PUBLIC_SOCKET_URL);
    } catch (ex) {
      toast.error('Socket connection failed');
    }

    return () => {
      window?.socket?.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
}
