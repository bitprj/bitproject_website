import {
    Box,
    Heading,
    Img,
    Text,
    useColorModeValue as mode,
    Container,
} from '@chakra-ui/react'

import * as React from 'react'

export const Testimonials = ({ heading, desc }) => {
    return (
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <Container
                maxW="container.lg"
                p="15px"
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="extrabold"
                    maxW="32rem"
                    mx="auto"
                    textAlign="center"
                    lineHeight="1.2"
                    letterSpacing="tight"
                >
                    {heading}
                </Heading>

                <Text fontSize="xl" mt="4" mx="auto" textAlign="center">
                    {desc}
                </Text>

            </Container>
        </Box>

    )
}