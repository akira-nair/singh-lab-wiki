import { Box, Button, Card, Divider, HStack, Image, Link, ListItem, OrderedList, Text, VStack } from "@chakra-ui/react";
import Title from "../components/Title";
import { GrCloudComputer } from "react-icons/gr";
import { CopyBlock } from "react-code-blocks";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
function WikiCard() {
    return (
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
        <Box justifyContent={'center'} alignItems={'center'} paddingBottom={'500px'}>

            <Title text="Wiki"></Title>
            <HStack justifyContent={'center'} alignItems={'center'}>
                <Box borderRadius={'30px'} padding={'3%'} backgroundColor={'#504746'} minWidth={'40%'} maxWidth={'300px'}>
                    <Text marginBottom={'30px'} fontWeight={'bold'} fontSize={'xl'} color={'white'}> Getting started in the lab? Need answers to your burning questions? We've got you covered! </Text>
                    <Divider/>
                    <Button marginTop={'30px'} style={{backgroundColor: '#B6244F', borderRadius: 'lg', color:'white'}}>
                    <Link href='https://hackmd.io/@singh-lab-wiki/BJO5y0GWR' isExternal>
                    <Text fontSize={"large"}>Access our wiki!</Text>

                    </Link>
                    
                </Button>
                </Box>
                
            </HStack>
            {/* <Image src="assets/wiki-bg.jpeg" opacity={0.15}/> 
            <Box top="0%" left="50%" position={'absolute'} transform="translate(-50%, -50%)" zIndex={1}>
            <Text> Getting started in the lab? Need answers to your burning questions? We've got you covered! </Text>
            </Box> */}
        </Box>


    )
}

export default Wiki;