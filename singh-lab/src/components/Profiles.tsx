import { Box, Card, Heading, VStack, Image, Stack, Text, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";


export function ProfileCard(props: { name: string, role: string, image?: string, fun_fact?: string }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Card maxW={'300px'} height={'100%'} width={'90%'} padding={'10px'}>
            <Box position="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Image src={props.image ? props.image : "assets/profiles/profile_default.webp"} />
                {isHovered && (
                    <Box position="absolute" top="0" left="0" width="100%" height="100%" backgroundColor="rgba(0, 0, 0, 0.7)" display="flex" alignItems="center" justifyContent="center">
                        <Text color="white" fontSize={20}>{props.fun_fact ? props.fun_fact : props.name
                        }</Text>
                    </Box>
                )}
            </Box>
            <Stack margin={'30px'}>
                <Text fontWeight={"bold"} fontSize={'large'}>{props.name}</Text>
                <Text fontSize={'0.8em'}>{props.role} </Text>
            </Stack>

        </Card>
    )
}

export default function Profiles() {
    const [isSmallScreen] = useMediaQuery('(max-width: 800px)');
    const [profilesData, setProfilesData] = useState<{ [key: string]: any } | null>(null);
    const [oldProfilesData, setOldProfilesData] = useState<{ [key: string]: any } | null>(null);
    useEffect(() => {
        const fetchProfilesData = async () => {
            try {
                const response1 = await fetch('/data/profiles.json');
                const response2 = await fetch('/data/former_members.json');
                const data1 = await response1.json();
                const data2 = await response2.json();
                setProfilesData(data1);
                setOldProfilesData(data2);
            } catch (error) {
                console.error('Error fetching profiles data:', error);
            }
        };

        fetchProfilesData();
    }, []);
    return (
        <Box>
            <Heading fontSize={'1.8em'} padding={'50px'} color={'white'}>
                Members
            </Heading>

            <VStack>
                <ProfileCard name="Ritambhara Singh" role="Assistant Professor Computer Science and Data Science" image="assets/profiles/ritambhara_singh.webp" fun_fact="I have the best lab at Brown!" />
                {profilesData ? (
                    profilesData.map((item: { [x: string]: { name: string; role: string; image: string; fun_fact: string | undefined; }[]; }, index: any) => (
                        <div>
                            <Text marginTop={'35px'} marginBottom={'15px'} fontSize={'1.3em'} color={'white'}>{Object.keys(item)[0]}</Text>
                            <SimpleGrid columns={isSmallScreen ? 1 : 3} alignItems={'center'} justifyItems={'center'} maxW={'100%'} spacingX={'10px'} spacingY={'15px'}>
                                {item[Object.keys(item)[0]].map((profile: { name: string; role: string; image: string; fun_fact: string | undefined; }, profileIndex: Key | null | undefined) => (
                                    <ProfileCard name={profile.name} role={profile.role} image={profile.image} fun_fact={profile.fun_fact} key={profileIndex}></ProfileCard>
                                ))}
                            </SimpleGrid>
                        </div>
                    ))
                ) : null}
            </VStack>
            <Heading fontSize={'1.8em'} marginTop={'50px'} color={'white'}>
                Former Members
            </Heading>
            {
                oldProfilesData ? oldProfilesData.map((item: { [x: string]: { name: string | null | undefined; role: string | null | undefined; position: string | null | undefined; }[]; }, index: any) => (
                    <div>
                        <Text marginTop={'35px'} marginBottom={'15px'} fontSize={'1.3em'} color={'white'}>{Object.keys(item)[0]}</Text>
                        <VStack>
                        {item[Object.keys(item)[0]].map((profile: { name: string | null | undefined; role: string | null | undefined; position: string | null | undefined; }, profileIndex: any) => (
                                    <Text fontWeight={'light'} color={'white'}>{profile.name} ({profile.role}) → {profile.position}</Text>
                                ))}
                        </VStack>
                    </div>
                )) : null
            }
        </Box>
    )
}