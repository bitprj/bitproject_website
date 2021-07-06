import {
    Box,
    Img,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

export const HighlightBox = ({ title, companyLogo, image, link }) => {
    let bkgUrl = `url(${image})`
    return (
        <Box  
            overflow="hidden" 
            bg="black" 
            mx="auto"
            as="a"
            href={link}
            transition="all 0.2s"
            _hover={{ backgroundColor: "#222326" }}
        >
            <Box p="6">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    lineHeight="tight"
                    h="10rem"
                >
                    <Text fontSize="2xl" fontWeight="800" color="white">
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
