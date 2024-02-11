import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header } from '@ogrenciden/components';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ogrenciden!</title>
      </Head>
      <main className="app">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
