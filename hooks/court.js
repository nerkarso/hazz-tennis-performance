import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useCourt(id) {
  return useQuery('court', () => fetcher(`/api/courts/${id}`));
}

export function useCourts(query) {
  return useQuery('courts', () => fetcher('/api/courts', { query }));
}

export function useCourtCreate() {
  return useMutation((data) =>
    fetcher('/api/courts', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  );
}

export function useCourtUpdate() {
  return useMutation(({ id, ...data }) => {
    return fetcher(`/api/courts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  });
}

export function useCourtDelete() {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => {
      return fetcher(`/api/courts/${id}`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('courts');
      },
    },
  );
}
