import { useState } from 'react';

import { Box, Container, Heading } from '@chakra-ui/react';

import { HEADER_HEIGHT, HEADER_TITLE } from '@/infra/constants/header';

const Header = () => {
  return (
    <Box
      as="header"
      w="100%"
      h={HEADER_HEIGHT}
      bg="#444"
      boxShadow="xl"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
    >
      <Container maxW="container.xl">
        <Heading>{HEADER_TITLE}</Heading>
      </Container>
    </Box>
  ); 
};

export { Header };
