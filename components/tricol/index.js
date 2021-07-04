import {
    Box,
    Heading,
    Container,
    Text,
    SimpleGrid,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import * as React from 'react'
export const TriCol = ({ heading1, para1, heading2, para2, heading3, para3 }) => {
    return (
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <Container
                maxW="container.lg"
                p="15px"
            >
                <SimpleGrid columns={4} spacing={10} minChildWidth="200px">
                    <Box>
                        <Heading
                            as="h1"
                            size="md"
                            fontWeight="extrabold"
                            maxW="48rem"
                            mx="auto"
                            lineHeight="1.2"
                            letterSpacing="tight"
                            >
                            {heading1}
                        </Heading>
                        <Text fontSize="sm" mt="4" maxW="xl" mx="auto" >
                            {para1}
                        </Text>
                    </Box>
                    <Box>
                        <Heading
                            as="h1"
                            size="md"
                            fontWeight="extrabold"
                            maxW="48rem"
                            mx="auto"
                            lineHeight="1.2"
                            letterSpacing="tight"
                            >
                            {heading2}
                        </Heading>
                        <Text fontSize="sm" mt="4" maxW="xl" mx="auto" >
                            {para2}
                        </Text>
                    </Box>
                    <Box>
                        <Heading
                            as="h1"
                            size="md"
                            fontWeight="extrabold"
                            maxW="48rem"
                            mx="auto"
                            lineHeight="1.2"
                            letterSpacing="tight"
                            >
                            {heading3}
                        </Heading>
                        <Text fontSize="sm" mt="4" maxW="xl" mx="auto" >
                            {para3}
                        </Text>
                    </Box>
                </SimpleGrid>

            </Container>
        </Box>

    )
}
