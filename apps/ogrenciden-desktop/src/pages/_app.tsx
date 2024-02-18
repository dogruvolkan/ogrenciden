import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header, Footer } from '@ogrenciden/components';
import { css } from '@emotion/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ogrenciden!</title>
      </Head>
      <main >
        <Header />
        <div css={appCss}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </>
  );
}

const appCss = css`
  min-height: calc(100vh - 350px);
`

export default CustomApp;
