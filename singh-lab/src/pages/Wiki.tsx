import { Box, Card, Divider, HStack, Image, ListItem, OrderedList, Text, VStack } from "@chakra-ui/react";
import Title from "../components/Title";
import { GrCloudComputer } from "react-icons/gr";
function WikiCard() {
    return(
        <Box>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  minH={'40px'}
  padding={'5px'}
  overflow='hidden'
  variant='outline'
        border={15}
  backgroundColor={'#FBB7C0'}
>
    <HStack>
    <GrCloudComputer />
    <Text>Name of article</Text>
    </HStack>
</Card>
    </Box>
    )
    
}

function Wiki() {
    return (
        <Box alignItems={'center'} paddingBottom={'500px'}>
            <Title text="Wiki"></Title>
            <Box borderRadius={'30px'} padding={'30px'} backgroundColor={'#B6244F'} width={'20%'} marginLeft={'5%'}>
                <Text fontWeight={'bold'} fontSize={'xl'} color={'white'}> Getting started in the lab? Need answers to your burning questions? We've got you covered! </Text>
                <Divider margin={'10px'}/>
                <OrderedList textAlign={'left'} style={{color: 'white'}} spacing={5}>
                    <ListItem>
                        Welcome!
                    </ListItem>
                    <ListItem>
                        {/* <WikiCard /> */}
                        Intro to Oscar: Your supercomputer
                    </ListItem>
                    <ListItem>
                        Navigating the file system in Linux
                    </ListItem>
                    <ListItem>
                        Submitting your first script
                    </ListItem>
                </OrderedList>

            </Box>
            {/* <Image src="assets/wiki-bg.jpeg" opacity={0.15}/> 
            <Box top="0%" left="50%" position={'absolute'} transform="translate(-50%, -50%)" zIndex={1}>
            <Text> Getting started in the lab? Need answers to your burning questions? We've got you covered! </Text>
            </Box> */}
        </Box>


    )
}

export default Wiki;