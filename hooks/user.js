import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useUser(id) {
  return useQuery('user', () => fetcher(`/api/users/${id}`));
}

export function useUsers(query) {
  return useQuery('users', () => fetcher('/api/users', { query }));
}

export function useUserCreate() {
  return useMutation((data) =>
    fetcher('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  );
}

export function useUserUpdate() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, ...data }) => {
      return fetcher(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    },
  );
}

export function useUserDelete() {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => {
      return fetcher(`/api/users/${id}`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    },
  );
}

export function useUserAuth() {
  return useMutation((data) =>
    fetcher('/api/users/auth', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  );
}

export function useUserIdentify() {
  return useMutation((data) =>
    fetcher('/api/users/identify', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  );
}
