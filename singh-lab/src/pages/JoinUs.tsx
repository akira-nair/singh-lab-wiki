import { Box , HStack, Image, SimpleGrid, Text, VStack, useMediaQuery} from "@chakra-ui/react";
import Title from "../components/Title";


function JoinUs(){
    const [isSmallScreen] = useMediaQuery('(max-width: 1000px)');
    if (isSmallScreen) {
        return (
            <Box paddingBottom={'50px'}>
            <Title text="Join the Lab!"></Title>
            <VStack color='white' justifyContent={'center'} alignItems={'center'} padding={'20px'}>
                <Image src="assets/lab-add-pic1.png" />
                <Box borderRadius={'30px'} padding={'30px'} backgroundColor={'#504746'} alignContent={'center'}>
                        <VStack spacing={'20px'}>
                    <Text>
                The lab is looking for highly motivated students, with strong computational skills, who are excited about developing data-driven approaches to solve important problems in biology and health sciences.
                    </Text>
                    <Text>
                    Required skills for lab members include basic UNIX/Linux competency and programming ability (preferably in Python). <b>Coursework or project experience in machine learning and/or deep learning is highly preferred.</b>
                    </Text>
                    <Text>
                    Prospective students, please apply directly to the CCMB or CS graduate programs at Brown and mention me in your application (<b>no e-mails please!</b>).
                    </Text>
                    <Text>
                    If you are at Brown and interested in joining the lab or a researcher interested in collaborating with us, please e-mail <a href="mailto:ritambhara@brown.edu">ritambhara@brown.edu</a>.
                    </Text>
                    <Text>
                    Interested students at Brown are <b>highly recommended</b> to attend my <i>Deep Learning in Genomics</i> course in the Fall (CSCI 2952-G) or <i>Deep Learning</i> course in the Spring (CSCI 1470/2470).
                    </Text>
                    </VStack>
                    </Box>
                    <Image src="assets/lab-add-pic2.png" />
                
            </VStack>
            
        </Box>
        )
    }
    return (
        <Box paddingBottom={'50px'}>
            <Title text="Join the Lab!"></Title>
            <HStack color='white' justifyContent={'center'} alignItems={'center'}>
                <SimpleGrid spacing={10} columns={3} padding={'5%'} overflow={'visible'}>
                    <Image src="assets/lab-add-pic1.png" />
                    <Box borderRadius={'30px'} padding={'30px'} backgroundColor={'#504746'} alignContent={'center'}>
                        <VStack spacing={'20px'}>
                    <Text>
                The lab is looking for highly motivated students, with strong computational skills, who are excited about developing data-driven approaches to solve important problems in biology and health sciences.
                    </Text>
                    <Text>
                    Required skills for lab members include basic UNIX/Linux competency and programming ability (preferably in Python). <b>Coursework or project experience in machine learning and/or deep learning is highly preferred.</b>
                    </Text>
                    <Text>
                    Prospective students, please apply directly to the CCMB or CS graduate programs at Brown and mention me in your application (<b>no e-mails please!</b>).
                    </Text>
                    <Text>
                    If you are at Brown and interested in joining the lab or a researcher interested in collaborating with us, please e-mail <a href="mailto:ritambhara@brown.edu">ritambhara@brown.edu</a>.
                    </Text>
                    <Text>
                    Interested students at Brown are <b>highly recommended</b> to attend my <i>Deep Learning in Genomics</i> course in the Fall (CSCI 2952-G) or <i>Deep Learning</i> course in the Spring (CSCI 1470/2470).
                    </Text>
                    </VStack>
                    </Box>
                    <Image src="assets/lab-add-pic2.png" />
                </SimpleGrid>
                
            </HStack>
            
        </Box>
    )
}

export default JoinUs;