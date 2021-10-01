import { SocketContext } from '@/contexts';
import { useContext } from 'react';

export function useSocket() {
  return useContext(SocketContext);
}
