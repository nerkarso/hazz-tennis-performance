import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    try {
      const ws = window.io(process.env.NEXT_PUBLIC_SOCKET_URL);
      setSocket(ws);
    } catch (ex) {
      toast.error('Socket connection failed');
    }

    return () => {
      socket?.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
}
