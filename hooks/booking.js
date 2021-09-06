import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useBooking(id) {
  return useQuery('booking', () => fetcher(`/api/bookings/${id}`));
}

export function useBookings(query) {
  return useQuery('bookings', () => fetcher('/api/bookings', { query }));
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
