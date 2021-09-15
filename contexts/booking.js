import { createContext, useState } from 'react';

export const CurrentBookingContext = createContext(null);

export function CurrentBookingProvider({ children }) {
  const [currentBooking, setCurrentBooking] = useState();

  return <CurrentBookingContext.Provider value={{ currentBooking, setCurrentBooking }}>{children}</CurrentBookingContext.Provider>;
}
