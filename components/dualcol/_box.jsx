import {
    Box,
    Img,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

export const HighlightBox = ({ title, companyLogo, image }) => {
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
                    <Img src={companyLogo} h="40px" display="inline"/>
                </Box>
                <Img src={image} h="200px" objectFit="contain" mb="-15" mx="auto"/>


            </Box>
        </Box>

    )
}
