import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useNotifications(query) {
  return useQuery('notifications', () => fetcher('/api/notifications', { query }));
}

export function useNotificationsUpdate(query) {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      return fetcher(`/api/notifications`, {
        method: 'PUT',
        body: JSON.stringify(data),
        query,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notifications');
      },
    },
  );
}

export function useNotificationsDelete(query) {
  const queryClient = useQueryClient();

  return useMutation(
    () => {
      return fetcher('/api/notifications', {
        method: 'DELETE',
        query,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notifications');
      },
    },
  );
}

export function useNotificationCreate() {
  return useMutation((data) => {
    return fetcher('/api/notifications', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  });
}
