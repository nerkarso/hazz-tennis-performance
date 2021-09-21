import { fetcher } from '@/lib';
import { addHours } from 'date-fns';
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

export function useUserAccount(id) {
  return useQuery('account', () => fetcher(`/api/users/${id}`));
}

export function useCoachesAvailable({ date_time, duration }) {
  const startTime = date_time;
  const endTime = addHours(new Date(date_time), duration).toISOString();
  const query = {
    filter: {
      $and: [
        {
          booking_status: 1,
        },
        {
          date_time: {
            $gt: startTime,
          },
        },
        {
          date_time: {
            $lt: endTime,
          },
        },
      ],
    },
  };

  return useQuery('coaches', () => fetcher('/api/users/coaches', { query }));
}
