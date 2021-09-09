module.exports = {
  async redirects() {
    return [
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
