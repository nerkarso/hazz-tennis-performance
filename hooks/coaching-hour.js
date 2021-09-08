import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useCoachingHour(id) {
  return useQuery('coaching-hour', () => fetcher(`/api/coaching-hours/${id}`));
}

export function useCoachingHours(query) {
  return useQuery('coaching-hours', () => fetcher('/api/coaching-hours', { query }));
}

export function useCoachingHourCreate() {
  return useMutation((data) =>
    fetcher('/api/coaching-hours', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  );
}

export function useCoachingHourUpdate() {
  return useMutation(({ id, ...data }) => {
    return fetcher(`/api/coaching-hours/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  });
}

export function useCoachingHourDelete() {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => {
      return fetcher(`/api/coaching-hours/${id}`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('coaching-hours');
      },
    },
  );
}
