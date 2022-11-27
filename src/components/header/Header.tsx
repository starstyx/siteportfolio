import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Box, Container, Heading, ButtonGroup, Button, Flex, Spacer } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

import { UserAuthenticationButton } from './userAuthenticationButton';

import { HEADER_HEIGHT, HEADER_TITLE } from '@/infra/constants/header';

import type { PageNavItem } from '@/infra/types/pageNavItem';

type HeaderProps = {
  pages: PageNavItem[];
};

const Header = ({ pages }: HeaderProps) => {
  const { toggleColorMode } = useColorMode();
  const { pathname } = useRouter();

  const currentPageBaseUrl = `/${pathname.split('/')[1]}`;
  const currentPage = pages.find(page => page.baseUrl === currentPageBaseUrl);

  return (
    <Box
      as="header"
      w="100%"
      h={HEADER_HEIGHT}
      backgroundColor="rgba(240, 240, 240, 0.6)" backdropFilter="saturate(180%) blur(8px)"
      boxShadow="lg"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
    >
      <Container maxW="container.xl" h="100%">
        <Flex align="center" h="100%">
          <Link href="/">
            <Heading>{HEADER_TITLE}</Heading>
          </Link>
          <Spacer />
          <ButtonGroup variant="ghost" colorScheme="blue">
            {pages.map(page =>
              <Link key={page.baseUrl} href={page.baseUrl}>
                <Button
                  {
                    ...(page.baseUrl === currentPageBaseUrl 
                      ? { variant: 'solid' } 
                      : {}
                    )
                  }
                >
                  {page.name}
                </Button>
              </Link>
            )}
          </ButtonGroup>
          <UserAuthenticationButton />
        </Flex>
      </Container>
    </Box>
  ); 
};

export { Header };
