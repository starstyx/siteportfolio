import { useEffect, useState } from 'react';

import { Box, Container, Heading, ButtonGroup, Button, Flex, Spacer } from '@chakra-ui/react';

import { HEADER_HEIGHT, HEADER_TITLE } from '@/infra/constants/header';

const Header = () => {
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
          <Heading>{HEADER_TITLE}</Heading>
          <Spacer />
          <ButtonGroup variant="outline" colorScheme="blackAlpha">
            <Button>Home</Button>
            <Button variant="ghost">Portfolio</Button>
            <Button variant="ghost">Contact</Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </Box>
  ); 
};

export { Header };
