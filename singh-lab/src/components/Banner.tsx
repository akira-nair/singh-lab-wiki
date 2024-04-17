import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

function Banner() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Animation for text
    const textSpring = useSpring({
        opacity: isLoaded ? 1 : 0,
        from: { opacity: 0},
        config: { duration: 1000 }
    });

    // Animation for image
    const imageSpring = useSpring({
        opacity: isLoaded ? 1 : 0,
        // scale: isLoaded ? 1 : 0.8,
        from: { opacity: 0, scale: 0.7 },
    });

    // Set isLoaded to true after component mounts
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Box backgroundColor="#BFADA3" padding="2rem">
            <VStack alignItems="center" spacing="2rem">
                <animated.div style={textSpring}>
                    <Text textAlign="center" fontSize="xl" fontWeight="bold">
                        Our research lab develops machine learning methods with broad goals of data integration and model interpretation for biological and biomedical applications.
                    </Text>
                </animated.div>
                <animated.div style={imageSpring}>
                    <Image src="assets/lab-pic.png" maxW="40%" borderRadius="lg" boxShadow="lg" />
                </animated.div>
            </VStack>
        </Box>
    );
}


export default Banner;