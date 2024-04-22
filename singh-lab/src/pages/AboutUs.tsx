import { Box, Text } from "@chakra-ui/react";
import Title from "../components/Title";
import Profiles from "../components/Profiles";

function AboutUs(){
    return (
        <Box paddingBottom={'50px'}>
            <Title text="About Us"></Title>
            <Text color="white">
                some of the craziest computational biologists at brown...
            </Text>
            <Profiles />
        </Box>
    )
}

export default AboutUs;