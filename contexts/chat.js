import { createContext, useEffect, useState } from 'react';

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
    window?.socket?.on('chat:newMessage', (message) => {
      setChatMessages((state) => [...state, message]);
    });

    return () => {
      setChatMessages([]);
      setChatRoom(undefined);
      setPreviousChatRoom(undefined);
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
