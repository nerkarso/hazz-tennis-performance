module.exports = function fetcher(url, { query, ...options }) {
  if (query) {
    url += '?';
    url += Object.keys(query)
      .map((key) => `${key}=${JSON.stringify(query[key])}`)
      .join('&');
  }

  return fetch(url, {
    'Content-Type': 'application/json',
    ...options,
  }).then((res) => res.json());
};
