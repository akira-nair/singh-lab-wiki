import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Projects from "../components/Projects";

function Home(){
    return(
            <Box paddingBottom={'100px'}>
            <Banner />
            <Projects />
            </Box>
    )
}

export default Home;