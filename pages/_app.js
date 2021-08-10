import '@/styles/index.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title && `${Component.title} - `}Hazz Tennis Performance</title>
        <link
          rel="shortcut icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎾</text></svg>"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
