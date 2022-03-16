import { Heading } from '@chakra-ui/react'

export const MainHead = ({ children }) => {
    return (
        <Heading
            as="h1"
            size="xl"
            fontWeight="extrabold"
            maxW="48rem"
            color='white'
            lineHeight="1.2"
            letterSpacing="tight"
        >
            {children}
        </Heading>
    )
}