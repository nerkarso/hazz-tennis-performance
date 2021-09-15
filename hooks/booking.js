import { CurrentBookingContext } from '@/contexts';
import { fetcher } from '@/lib';
import { useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useCurrentBooking() {
  return useContext(CurrentBookingContext);
}

export function useBooking(id) {
  return useQuery('booking', () => fetcher(`/api/bookings/${id}`));
}

export function useBookings(query) {
  return useQuery('bookings', () => fetcher('/api/bookings', { query }));
}

export function useBookingCreate() {
  return useMutation((data) =>
    fetcher('/api/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  );
}

export function useBookingUpdate() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, ...data }) => {
      return fetcher(`/api/bookings/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('booking');
      },
    },
  );
}

export function useBookingDelete() {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => {
      return fetcher(`/api/bookings/${id}`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bookings');
      },
    },
  );
}
