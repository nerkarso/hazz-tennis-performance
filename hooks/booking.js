import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useBookings(query) {
  return useQuery('bookings', () => fetcher('/api/bookings', { query }));
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
