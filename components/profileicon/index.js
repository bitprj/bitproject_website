import {
    Box,
    Center,
    Flex,
    Heading,
    Img,
    Container,
    Text,
    Square,
    Link,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import * as React from 'react'
export const ProfileIcon = ({ pic, name, title }) => {
    return (

        <Flex color="white" bg="#1C1D25" w="220px" p="3" borderRadius="15px" alignItems="center"> 
            <Square size="">
                <Img 
                    src={pic}
                    w="50px"
                    h="50px"
                    boxSize="50px"
                    objectFit="cover"
                    borderRadius="15px"  
                />
            </Square>

            <Box ml="2">
                <Text fontSize="xl" maxW="xl" mx="auto" fontWeight="bold">
                    {name}
                </Text>
                <Text fontSize="md" maxW="xl" mx="auto" textAlign="left">
                    {title}
                </Text>
            </Box>
        </Flex>

    )
}
