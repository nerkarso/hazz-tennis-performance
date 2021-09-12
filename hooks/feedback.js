import { fetcher } from '@/lib';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useFeedback(id) {
  return useQuery('feedback', () => fetcher(`/api/feedbacks/${id}`));
}

export function useFeedbacks(query) {
  return useQuery('feedbacks', () => fetcher('/api/feedbacks', { query }));
}

export function useFeedbackCreate() {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      return fetcher('/api/feedbacks', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('feedbacks');
      },
    },
  );
}

export function useFeedbackDelete() {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => {
      return fetcher(`/api/feedbacks/${id}`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('feedbacks');
      },
    },
  );
}

export function useFeedbackReplyCreate() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ feedbackId, ...data }) => {
      return fetcher(`/api/feedbacks/${feedbackId}/replies`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('feedbacks');
      },
    },
  );
}

export function useFeedbackReplyDelete() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ feedbackId, replyId }) => {
      return fetcher(`/api/feedbacks/${feedbackId}/replies/${replyId}`, {
        method: 'DELETE',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('feedbacks');
      },
    },
  );
}
