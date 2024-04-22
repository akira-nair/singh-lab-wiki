import { AbsoluteCenter, Box, Button, Center, Flex, Icon, Image, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
export default function ProjectCard(props: {title: string, description: string}) {
    const [isSmallScreen] = useMediaQuery('(max-width: 1000px)');
    return (
        <Box width={isSmallScreen ? '80%' : '40%'} backgroundColor={'rgba(255, 255, 255, 0.8)'} boxShadow={30}>
            <Flex direction={'row'} margin={'3%'} justifyContent={'center'}>
                <Image maxHeight={'100px'} src='assets/project-icon.png' margin={'3%'} />
                
                <VStack align={'center'}>
                    <Text fontSize={'large'}>{props.title}</Text>
                    <Text fontSize={'small'}>{props.description}</Text>
                    <Button variant='link' fontSize={'smaller'}>
                        <Text>Learn More</Text>
                        <ArrowForwardIcon></ArrowForwardIcon>
                    </Button>
                    {/* <Icon as={'ArrowForwardIcon'}> Learn More </Icon> */}
                </VStack>
                
            </Flex>
        </Box>
    )
}