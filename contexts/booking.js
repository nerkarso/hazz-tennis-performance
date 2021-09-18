import { createContext, useState } from 'react';

export const CurrentBookingContext = createContext(null);

export function CurrentBookingProvider({ children }) {
  const [currentBooking, setCurrentBooking] = useState({
    notify_client: false,
    notify_coach: false,
    total_fees: 0,
  });

  const updateCurrentBooking = (newState) => {
    setCurrentBooking((state) => ({ ...state, ...newState }));
  };

  return <CurrentBookingContext.Provider value={{ currentBooking, setCurrentBooking, updateCurrentBooking }}>{children}</CurrentBookingContext.Provider>;
}
