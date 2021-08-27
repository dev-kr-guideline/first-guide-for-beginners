import '../styles/globals.css';
import '../styles/markdown.css';

import type { AppProps } from 'next/app';
import { ChakraProvider, Container, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../components/header';
import Navigation from '../components/nav';
import React from 'react';
import TABLE_OF_CONTENTS from '../lib/toc';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>First guide for beginners</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='A guide for beginner developers' />
      </Head>
      <Container maxW={'container.lg'}>
        <Stack>
          <header>
            <Header />
          </header>

          <nav aria-labelledby='nav-title'>
            <Navigation tableOfContents={TABLE_OF_CONTENTS} />
          </nav>

          <main>
            <Component {...pageProps} />
          </main>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
