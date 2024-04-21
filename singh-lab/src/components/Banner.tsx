import { Box, Heading, Text, Image, VStack, HStack, Button, Divider, Link } from "@chakra-ui/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

function Banner() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Animation for text
    const textSpring = useSpring({
        opacity: isLoaded ? 1 : 0,
        from: { opacity: 0},
        config: { duration: 2000 }
    });

    // Animation for image
    const imageSpring = useSpring({
        opacity: isLoaded ? 1 : 0,
        // scale: isLoaded ? 1 : 0.8,
        from: { opacity: 0 },
        config: { duration: 2000 }
    });

    // Set isLoaded to true after component mounts
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Box padding="2rem">
            <HStack justifyContent={'center'} alignItems="center" spacing="2rem">
                <VStack spacing={'50px'}>
                <animated.div style={textSpring}>
                    <Text fontSize="30" fontWeight={"bold"} letterSpacing={3} color={'white'} textAlign={'left'}>Welcome to the Singh Lab!</Text>
                    {/* <Divider margin={'20px'}/> */}
                    <Text textAlign="left" fontSize="20" color={'white'} marginTop={'20px'}>
                        Our research lab develops machine learning methods with broad goals of data integration and model interpretation for biological and biomedical applications.
                    </Text>
                </animated.div>
                <Button style={{backgroundColor: '#B6244F', borderRadius: 'lg', color:'white'}}>
                    <Link href='/about'>
                    <Text fontSize={"large"}>Learn More</Text>
                    </Link>
                    
                </Button>
                </VStack>
                <animated.div style={{...imageSpring, alignItems: 'center', display: 'flex', justifyContent: 'center'}} >
                    <Image src="assets/lab-pic.png" maxW="60%" borderRadius="lg" boxShadow="lg" />
                </animated.div>
            </HStack>
        </Box>
    );
}


export default Banner;