module.exports = {
  async redirects() {
    return [
      {
        source: '/account',
        destination: '/account/signin',
        permanent: true,
      },
      {
        source: '/client',
        destination: '/client/dashboard',
        permanent: true,
      },
      {
        source: '/coach',
        destination: '/coach/dashboard',
        permanent: true,
      },
      {
        source: '/owner',
        destination: '/owner/dashboard',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};
