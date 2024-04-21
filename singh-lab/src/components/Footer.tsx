import { Box, Text } from "@chakra-ui/react";

export default function Footer(){
    return (
        <Box
          as="footer"
          bg="#333"
          color="#fff"
          p="4"
          textAlign="center"
        >
          <Text>&copy; Singh Lab 2024</Text>
          <Text fontSize={10}>Built by Akira Nair, Manav Chakravarthy, Wangdrak Dorji</Text>
        </Box>
      );
}