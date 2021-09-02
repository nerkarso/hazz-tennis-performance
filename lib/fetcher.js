module.exports = function fetcher(url, options) {
  if (options?.query) {
    url += '?';
    url += Object.keys(options.query)
      .map((key) => `${key}=${JSON.stringify(options.query[key])}`)
      .join('&');
    delete options.query;
  }

  return fetch(url, {
    'Content-Type': 'application/json',
    ...options,
  }).then((res) => res.json());
};
