import { Heading } from "@chakra-ui/react"

export default function Title(props: {text: string}) {
    return (
        <Heading letterSpacing={2} padding={'50px'} color={'white'}>
            {props.text}
        </Heading>
    )
}