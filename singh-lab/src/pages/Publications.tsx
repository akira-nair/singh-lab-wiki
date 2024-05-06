import { Container, Text, Box, Heading, VStack, Stack, Link, HStack, Divider } from "@chakra-ui/react";
import Title from "../components/Title";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
interface Author {
    name: string;
    equal_contribution: boolean;
    corresponding: boolean;
    undergrad: boolean;
}

const authors: Author[] = [
    {
        name: 'John Doe',
        equal_contribution: true,
        corresponding: false,
        undergrad: true
    },
    {
        name: 'Jane Smith',
        equal_contribution: false,
        corresponding: true,
        undergrad: false
    }
];

function PublicationCard(props: { title: string, authors: Author[], journal?: string, code?: string , link?: string}) {
    return (
        <Container maxWidth={'100%'} color={'white'} padding={'20px'}>
            <Text fontSize={'1.1em'}>
                {props.authors && props.authors.map((author, index) => (
                    <React.Fragment key={index}>
                        {author.undergrad ? <u>{author.name}</u> : author.name=='R. Singh' ? <b>{author.name}</b> : author.name}
                        {author.equal_contribution && <span>*</span>}
                        {author.corresponding && <span>†</span>}
                        {index !== props.authors.length - 1 && ', '}
                    </React.Fragment>
                ))}. "{props.title}" <i>{props.journal}</i>
            </Text>
            <HStack spacing={'2%'} marginTop={'8px'}>
            {props.link ?
                <Link href={props.link} isExternal>
                    <Stack direction={'row'} textAlign={'left'} justifyContent={'flex-start'}>
                        <FiLink scale={2} />
                        <Text fontSize={'0.6em'}>
                            Read publication
                        </Text>
                    </Stack>
                </Link>
                :
                null
            }
            {props.code ?
                <Link href={props.code} isExternal>
                    <Stack direction={'row'} textAlign={'left'} justifyContent={'flex-start'}>
                        <FaGithub scale={2} />
                        <Text fontSize={'0.6em'}>
                            View on Github
                        </Text>
                    </Stack>
                </Link>
                :
                null
            }
            </HStack>
        </Container>
    )

}

function Publications() {
    const [publicationsData, setPublicationsData] = useState<{ [key: string]: any } | null>(null);
    useEffect(() => {
        const fetchPublicationsData = async () => {
            try {
                const response = await fetch('/data/publications.json');
                const data = await response.json();
                setPublicationsData(data);
            } catch (error) {
                console.error('Error fetching publications data:', error);
            }
        };

        fetchPublicationsData();
    }, []);

    return (
        <Container maxWidth={'80%'} color={'white'}>
            <Title text="Publications"></Title>
            <VStack>
                {publicationsData ? (
                    publicationsData.map((item: { [x: string]: { title: string; authors: Author[]; journal: string; code: string | undefined; link: string | undefined}[]; }, index: React.Key | null | undefined) => (
                        <Box key={index} marginTop={'30px'} width={'100%'}>
                            <Heading as="h2" size="md" mb={4}>{Object.keys(item)[0]}</Heading>
                            <Box textAlign={'justify'} paddingX={'20%'}>
                            {item[Object.keys(item)[0]].map((publication: { title: string; authors: Author[]; journal: string; code: string | undefined; link: string | undefined }, pubIndex: React.Key | null | undefined) => (
                                <PublicationCard
                                    key={pubIndex}
                                    title={publication.title}
                                    authors={publication.authors}
                                    journal={publication.journal}
                                    code={publication.code}
                                    link={publication.link}
                                />
                            ))}
                            </Box>
                            {/* <Divider/> */}
                        </Box>
                    ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </VStack>
        </Container>
    )
}

export default Publications;