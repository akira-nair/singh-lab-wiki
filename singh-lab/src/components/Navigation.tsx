import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="2rem"
      bg="#504746"
      color="white"
    >
      <Flex align="center">
        <Text fontWeight="bold" fontSize="xl" letterSpacing={5}>
          SINGH LAB @ BROWN
        </Text>
      </Flex>
      <Box>
        <Flex align="center">
          <Link href="/about" marginRight="3rem">
            About Us
          </Link>
          <Link href="#" marginRight="3rem">
            Getting Started
          </Link>
          <Link href="#" marginRight="3rem">
            Publications
          </Link>
          <Link href="#" marginRight="3rem">
            Join Us
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navigation;