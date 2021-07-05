import {
    Box,
    Button,
    Flex,
    Heading,
    Img,
    Container,
    Text,
    Badge,
    Link,
    useColorModeValue as mode,
    Wrap,
    WrapItem,
    Avatar,
    Center,
    SimpleGrid
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import * as React from 'react'
import { HighlightBox } from './_box'

export const DualBox = ({ title1, companyLogo1, image1, link1, title2, companyLogo2, image2, link2 }) => {
    return (
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <Container
                maxW="container.lg"
                p="15px"
            >
                <SimpleGrid spacing="40px" minChildWidth="400px" >
                    
                    <Link href={link1} _hover="">
                        <Box>
                            <Center>
                            <HighlightBox
                                title={title1}
                                companyLogo={companyLogo1}
                                image={image1}
                            />
                            </Center>
                        </Box>
                    </Link>

                    <Link href={link2} _hover="none">
                        <Box>
                        <Center>
                            <HighlightBox
                                title={title2}
                                companyLogo={companyLogo2}
                                image={image2}
                            />
                            </Center>
                        </Box>
                    </Link>
                    
                </SimpleGrid>
            </Container>
        </Box>

    )
}
