import { Box, Text, VStack, Flex } from "@chakra-ui/react";
import Title from "../components/Title";
import Profiles from "../components/Profiles";
import { GrLocationPin } from "react-icons/gr";

function AboutUs(){
    return (
        <Box paddingBottom={'50px'} alignItems={'center'}>
            <Title text="About Us"></Title>
            <VStack>
                <Flex marginBottom={'10px'} padding={'10px'} direction={'row'} backgroundColor={'gray'}>
            <GrLocationPin color="white" />
            <Text color={"white"}>3rd Floor, 164 Angell St.</Text>
            </Flex>
            <Text fontSize={'1.2em'} color="white">
                some of the craziest computational biologists at brown...
            </Text>
            </VStack>
            <Profiles />
        </Box>
    )
}

export default AboutUs;