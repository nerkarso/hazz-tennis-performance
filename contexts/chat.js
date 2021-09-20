import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CurrentChatContext = createContext(null);

export function CurrentChatProvider({ children }) {
  const [chatMessages, setChatMessages] = useState([]);
  const [previousChatRoom, setPreviousChatRoom] = useState();
  const [chatRoom, setChatRoom] = useState();

  const newChatMessage = (data) => {
    const message = { ...data, created_at: new Date().toISOString() };

    window?.socket?.emit('chat:sendMessage', {
      message: message,
      room: chatRoom,
    });
  };

  useEffect(() => {
    try {
      window.socket = window.io(process.env.NEXT_PUBLIC_SOCKET_URL);
    } catch (ex) {
      toast.error('Socket connection failed');
    }

    window?.socket?.on('chat:newMessage', (message) => {
      setChatMessages((state) => [...state, message]);
    });

    return () => {
      setChatMessages([]);
      setChatRoom(undefined);
      setPreviousChatRoom(undefined);
      window?.socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (chatRoom && chatRoom !== previousChatRoom) {
      if (previousChatRoom) {
        window?.socket?.emit('chat:leaveRoom', { room: previousChatRoom });
      }
      window?.socket?.emit('chat:joinRoom', { room: chatRoom });
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
