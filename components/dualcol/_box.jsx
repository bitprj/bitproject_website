import {
    Box,
    Img,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

export const HighlightBox = ({ title, companyLogo, image }) => {
    let bkgUrl = `url(${image})`
    return (
        <Box border="2px solid #343539" overflow="hidden" bg="black" mx="auto">
            <Box p="6">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    h="12rem"
                >
                    <Text fontSize="3xl" fontWeight="800" color="white">
                        {title}
                    </Text>
                    {companyLogo && <>
                        <Text fontSize="md" color="#CCCDCE" mt="3" display="inline" mr="3">
                            In Collaboration with
                        </Text>
                        <Img src={companyLogo} h="40px" display="inline"/>
                    </>}
                </Box>
                <Box h="15rem" bgImage={bkgUrl} bgPosition="center"
  bgRepeat="no-repeat">
                </Box>
            </Box>
        </Box>

    )
}
