import { Box, Card, Heading, VStack, Image, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";


export function ProfileCard(props: {name: string, role: string, image: string, fun_fact?: string}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Card maxW={'300px'} width={'90%'} padding={'10px'}>
            <Box position="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Image src={props.image} />
                {isHovered && props.fun_fact && (
                    <Box position="absolute" top="0" left="0" width="100%" height="100%" backgroundColor="rgba(0, 0, 0, 0.7)" display="flex" alignItems="center" justifyContent="center">
                        <Text color="white" fontSize={20}>{props.fun_fact}</Text>
                    </Box>
                )}
            </Box>
            <Stack margin={'30px'}>
                <Text fontWeight={"bold"} fontSize={'large'}>{props.name}</Text>
                <Text fontSize={'medium'}>{props.role} </Text>
            </Stack>

        </Card>
    )
}

export default function Profiles() {
    return (
        <Box>
            <Heading padding={'50px'} color={'white'}>
                Members
            </Heading>
            
            <VStack>
                <ProfileCard name="Ritambhara Singh" role="Assistant Professor Computer Science and Data Science" image="assets/profiles/ritambhara_singh.webp" fun_fact="I have the best lab at Brown!" />
                <Heading marginTop={'35px'} marginBottom={'15px'} size={'md'} color={'white'}>Undergraduates</Heading>
                <SimpleGrid columns={3} alignItems={'center'} justifyItems={'center'} maxW={'100%'} spacingX={'10px'}>
                    <ProfileCard name="Wangdrak Dorji" role="Undergraduate Research Assistant (Computer Science)" image="assets/profiles/wangdrak_dorji.webp" fun_fact="I am from Thimphu, Bhutan!" />
                    <ProfileCard name="Manav Chakravarthy" role="Undergraduate Research Assistant (Computer Science & Physics)" image="assets/profiles/manav_chakravarthy.webp" fun_fact="I am from Chennai, India!" />
                    <ProfileCard name="Akira Nair" role="Undergraduate Research Assistant (Computer Science)" image="assets/profiles/akira_nair.webp" fun_fact="I am from Seattle, WA!" />
                </SimpleGrid>
            </VStack>
        </Box>
    )
}