import { Heading } from "@chakra-ui/react"

export default function Title(props: {text: string}) {
    return (
        <Heading>
            {props.text}
        </Heading>
    )
}