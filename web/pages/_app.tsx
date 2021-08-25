import '../styles/globals.css';
import '../styles/markdown.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>First guide for beginners</title>
        <meta name='description' content='A guide for beginner developers' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
