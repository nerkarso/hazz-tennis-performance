import { useMutation } from 'react-query';

export function useUserCreate() {
  return useMutation((data) =>
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  );
}

export function useUserAuth() {
  return useMutation((data) =>
    fetch('/api/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  );
}
