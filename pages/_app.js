import '@/styles/index.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {Component.title && `${Component.title} - `}
          {process.env.NEXT_PUBLIC_SITE_TITLE}
        </title>
        <meta name="title" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
        <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta name="color-scheme" content="light dark" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
        <meta property="og:description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/img/og-image.jpg`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="twitter:title" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
        <meta property="twitter:description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/img/og-image.jpg`} />
        <link rel="shortcut icon" href="/img/icon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
      <Toaster
        containerStyle={{ top: 30, right: 30 }}
        position="top-right"
        toastOptions={{
          className: 'border !py-3 !px-4 !shadow-md dark:!text-white dark:!bg-neutral-800 dark:!border-neutral-700',
        }}
      />
    </>
  );
}
