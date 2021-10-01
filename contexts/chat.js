import { useSocket } from '@/hooks';
import { createContext, useEffect, useState } from 'react';

export const CurrentChatContext = createContext(null);

export function CurrentChatProvider({ children }) {
  const { socket } = useSocket();
  const [chatMessages, setChatMessages] = useState([]);
  const [previousChatRoom, setPreviousChatRoom] = useState();
  const [chatRoom, setChatRoom] = useState();

  const newChatMessage = (data) => {
    const message = { ...data, created_at: new Date().toISOString() };

    socket?.emit('chat:sendMessage', {
      message: message,
      room: chatRoom,
    });
  };

  useEffect(() => {
    return () => {
      setChatMessages([]);
      setChatRoom(undefined);
      setPreviousChatRoom(undefined);
    };
  }, []);

  useEffect(() => {
    socket?.on('chat:newMessage', (message) => {
      setChatMessages((state) => [...state, message]);
    });
  }, [socket]);

  useEffect(() => {
    if (chatRoom && chatRoom !== previousChatRoom) {
      if (previousChatRoom) {
        socket?.emit('chat:leaveRoom', { room: previousChatRoom });
      }
      socket?.emit('chat:joinRoom', { room: chatRoom });
      setPreviousChatRoom(chatRoom);
    }
    return () => {};
  }, [chatRoom]);

  return (
    <CurrentChatContext.Provider
      value={{
        chatMessages,
        setChatMessages,
        newChatMessage,
        chatRoom,
        setChatRoom,
      }}>
      {children}
    </CurrentChatContext.Provider>
  );
}
