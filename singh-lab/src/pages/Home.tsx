import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Profiles from "../components/Profiles";
import LabUpdates from "../components/LabUpdates";

function Home(){
    return(
            <Box paddingBottom={'100px'}>
            <Banner />
            <Projects />
            <LabUpdates />
            {/* <Profiles /> */}
            </Box>
    )
}

export default Home;