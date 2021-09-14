import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useChat(id) {
  return useQuery(['chat', id], () => fetcher(`/api/chats/${id}`));
}

export function useChats(query) {
  return useQuery('chats', () => fetcher('/api/chats', { query }));
}

export function useChatCreate() {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      return fetcher('/api/chats', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('chats');
      },
    },
  );
}

export function useChatDelete() {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => {
      return fetcher(`/api/chats/${id}`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('chats');
      },
    },
  );
}

export function useChatMessageCreate(chatId) {
  return useMutation((data) => {
    return fetcher(`/api/chats/${chatId}/messages`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  });
}
