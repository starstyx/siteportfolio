import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

import { Header } from '../components/header';

import { HEADER_HEIGHT } from '../infra/constants/header';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, ...rest }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Container maxW="container.lg" mt={HEADER_HEIGHT}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
};
