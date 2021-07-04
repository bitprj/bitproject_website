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
    Stack
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import * as React from 'react'

export const HighlightBox = ({ title, companyLogo, image }) => {

    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW="sm" border="2px solid #343539" overflow="hidden" bg="black">


            <Box p="6">


                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                >
                    <Text fontSize="3xl" fontWeight="800" color="white">
                        {title}
                    </Text>
                    <Text fontSize="md" color="#CCCDCE" mt="3" display="inline" mr="3">
                        In Collaboration with
                    </Text>
                    <Img src={companyLogo} h="40px" display="inline" />
                </Box>
                <Img src={image} h="200px" objectFit="contain" />


            </Box>
        </Box>

    )
}
