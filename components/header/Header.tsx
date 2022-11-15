import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import { HEADER_HEIGHT } from '../../infra/constants/header';

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
    />
  ); 
};

export { Header };
