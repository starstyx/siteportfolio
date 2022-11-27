import { ChakraProvider, Container } from '@chakra-ui/react';

import { Header } from '@/components/header';

import { UserAuthenticationProvider } from '@/infra/contexts/userAuthentication';

import { HEADER_HEIGHT, HEADER_MARGIN } from '@/infra/constants/header';
import { PAGES } from '@/infra/constants/pagesList';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, ...rest }: AppProps) {
  return (
    <ChakraProvider>
      <UserAuthenticationProvider>
        <>
          <Header pages={PAGES} />
          <Container maxW="container.xl" mt={HEADER_HEIGHT+HEADER_MARGIN}>
            <Component {...pageProps} />
          </Container>
        </>
      </UserAuthenticationProvider>
    </ChakraProvider>
  );
};
