import React, { useState } from 'react';
import { Box, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navigation = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (isSmallScreen) {
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
          <Link href="/">
            <Text fontWeight="bold" fontSize="xl" letterSpacing={5}>
              SINGH LAB @ BROWN
            </Text>
          </Link>
        </Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            backgroundColor={'white'}
            color={'#504746'}
          />
          <MenuList color={'gray'}>
            <MenuItem >
            <Link href="/about" marginRight="3rem">
              About Us
            </Link>
            </MenuItem>
            <MenuItem >
            <Link href="/wiki" marginRight="3rem">
              Lab Wiki
            </Link>
            </MenuItem>
            <MenuItem >
            <Link href="/publications" marginRight="3rem">
              Publications
            </Link>
            </MenuItem>
            <MenuItem>
            <Link href="/join" marginRight="3rem">
              Join Us
            </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    );
  }
  else {
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
          <Link href="/">
            <Text fontWeight="bold" fontSize="xl" letterSpacing={5}>
              SINGH LAB @ BROWN
            </Text>
          </Link>
        </Flex>
        <Box>
          <Flex align="center">
            <Link href="/about" marginRight="3rem">
              About Us
            </Link>
            <Link href="/wiki" marginRight="3rem">
              Lab Wiki
            </Link>
            <Link href="/publications" marginRight="3rem">
              Publications
            </Link>
            <Link href="/news" marginRight="3rem">
              Lab Updates
            </Link>
            <Link href="/join" marginRight="3rem">
              Join Us
            </Link>
          </Flex>
        </Box>
      </Flex>
    );
  }

};

export default Navigation;