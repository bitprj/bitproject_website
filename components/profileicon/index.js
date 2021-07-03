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

        <Flex color="white" px="0.5rem" borderRadius="15px" alignItems="center"> 
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

            <Box ml="1.2rem" textAlign="left">
                <Text fontSize="xl" mx="auto" fontWeight="bold">
                    {name}
                </Text>
                <Text fontSize="md" mx="auto" >
                    {title}
                </Text>
            </Box>
        </Flex>

    )
}
