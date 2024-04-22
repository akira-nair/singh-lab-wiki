import { Box, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import { JsxChild } from "typescript";
import Title from "./Title";

const items = [
    {
      title: "January 2022",
      cardTitle: "Event 1",
      cardSubtitle: "Event 1 Subtitle",
      cardDetailedText: "This is the first event on the timeline.",
    },
    {
      title: "February 2022",
      cardTitle: "Event 2",
      cardSubtitle: "Event 2 Subtitle",
      cardDetailedText: "This is the second event on the timeline.",
    },
    {
      title: "March 2022",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    }
  ];
export default function LabUpdates() {
    return (
        <Box>
            <Title text="Lab News" />
            <Stack spacing={4}>
                <Heading size={'md'}>April 2024</Heading>
                <Heading size={'md'}>March 2024</Heading>
                <Heading size={'md'}>February 2024</Heading>
            </Stack>
        </Box>
      );
}