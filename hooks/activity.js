import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useActivities(query) {
  return useQuery('activities', () => fetcher('/api/activities', { query }));
}

export function useActivitiesDelete() {
  const queryClient = useQueryClient();

  return useMutation(
    () => {
      return fetcher(`/api/activities`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('activities');
      },
    },
  );
}

export function useActivityCreate() {
  return useMutation((data) => {
    return fetcher('/api/activities', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  });
}
