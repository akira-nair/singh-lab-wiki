import { HStack, Divider, Box, Link, Text, VStack, Card } from "@chakra-ui/react";
import Title from "../components/Title";
import { CiCalendarDate } from "react-icons/ci";
import { ReactNode } from "react";

function UpdateCard(props: { date: string, title: string, children?: ReactNode }) {
    return (
        <Card width={'100%'} padding={'15px'}>
            <HStack>
                <CiCalendarDate />
                <Text>
                    {props.date}
                </Text>
            </HStack>
            <VStack>
                <Text fontSize={'1.2em'} fontWeight={'bold'}>
                    {props.title}
                </Text>
                {props.children}
            </VStack>

        </Card>
    )
}

function NewsLink(props: { href: string, children?: ReactNode }) {
    return (
        <Link isExternal textDecoration={'underline'} href={props.href}>{props.children}</Link>
    )
}

export default function News() {
    return (
        <Box height={'100vh'} justifyContent={'center'} alignItems={'center'} paddingBottom={'500px'}>

            <Title text="Lab Updates"></Title>
            <VStack paddingX={'20%'} gap={5}>
                {/* TODO: Add lab updates here! */}
                <UpdateCard date="April 24, 2024" title="Headline for some event">
                    <Text>
                        You can include information about the news like so. Links look like <NewsLink href="https://www.github.com"> this</NewsLink>. Try it out!
                    </Text>
                </UpdateCard>
                <UpdateCard date="March 3, 2024" title="Headline for another event"></UpdateCard>
            </VStack>
        </Box>
    )

}