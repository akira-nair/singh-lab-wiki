import { Box, Heading, Text, Image, VStack, HStack, Button, Divider, Link, useMediaQuery, transition } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Banner() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSmallScreen] = useMediaQuery('(max-width: 800px)');

    // Set isLoaded to true after component mounts
    useEffect(() => {
        setIsLoaded(true);
    }, []);


    if (isSmallScreen) {
        return (
            <Box padding="4rem">
                <VStack justifyContent={'center'} alignItems="center" spacing="2rem">
                    <VStack spacing={'50px'}>
                        <Text fontSize="30" fontWeight={"bold"} letterSpacing={3} color={'white'} textAlign={'left'}>Welcome to the Singh Lab!</Text>
                        <Text textAlign="left" fontSize="20" color={'white'} marginTop={'20px'}>
                            Our research lab develops machine learning methods with broad goals of data integration and model interpretation for biological and biomedical applications.
                        </Text>
                        <Button style={{ backgroundColor: '#B6244F', borderRadius: 'lg', color: 'white' }}>
                            <Link href='/about'>
                                <Text fontSize={"large"}>Learn More</Text>
                            </Link>

                        </Button>
                    </VStack>
                    <Image src="assets/lab-pic.png" maxW="70%" borderRadius="lg" boxShadow="lg" />
                </VStack>
            </Box>
        );
    }
    else {
        return (
            <Box padding="5%">
                <HStack justifyContent={'center'} alignItems="center" spacing="2rem">
                    <VStack spacing={'50px'}>
                        <motion.div initial="hidden" animate="show" variants={{
                            hidden: {opacity: 0, x: '-20%'},
                            show: {opacity: 1, x: 0},
                        }} transition={{ease: "easeInOut", duration: 1, staggerChildren: 0.3}}>
                        <Box>
                            <Text fontSize="30" fontWeight={"bold"} letterSpacing={3} color={'white'} textAlign={'left'}>Welcome to the Singh Lab!</Text>
                            <Text textAlign="left" fontSize="20" color={'white'} marginTop={'20px'}>
                                Our research lab develops machine learning methods with broad goals of data integration and model interpretation for biological and biomedical applications.
                            </Text>
                        </Box>
                        </motion.div>
                        <motion.div initial="hidden" animate="show" variants={{
                            hidden: {opacity: 0},
                            show: {opacity: 1},
                        }} transition={{ease: "easeInOut", duration: 1, delay: 0.5}}>
                        <Button style={{ backgroundColor: '#B6244F', borderRadius: 'lg', color: 'white' }}>
                            <Link href='/about'>
                                <Text fontSize={"large"}>Learn More</Text>
                            </Link>

                        </Button>
                        </motion.div>
                    </VStack>
                    <motion.div initial="hidden" animate="show" variants={{
                            hidden: {opacity: 0, x: 10},
                            show: {opacity: 1, x: 0},
                        }} transition={{ease: "easeInOut", duration: 1, delay: 0.2}}>
                            <Box paddingX={'10%'}>
                    <Image src="assets/lab-pic.png" borderRadius="lg" boxShadow="lg" />
                    </Box>
                    </motion.div>
                </HStack>
            </Box>
        );
    }

}


export default Banner;