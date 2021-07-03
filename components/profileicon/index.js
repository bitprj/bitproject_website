import {
    Box,
    Center,
    Flex,
    Heading,
    Img,
    Container,
    Text,
    Square,
    Stack,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import { useEffect, useState } from "react";
import * as React from 'react'
import styles from './ProfileIcon.module.css';

export const ProfileIcon = ({ pic, name, title }) => {

   
    var direct;
    useEffect(() => {
        
        window.addEventListener('resize', () => {
            const myWidth = window.innerWidth;
            if (myWidth <= 600) {
                direct = "column"
            }
            else {
                direct = "row"
            }

        })
    })

    return (

        // <Stack color="white" px="0.5rem" borderRadius="15px" alignItems="center" direction={undefined}>
         <Flex color="white" px="0.5rem" borderRadius="15px" alignItems="center">
            <Box>
                <Square size="">
                    <Img
                        className={styles.pfp}
                        src={pic}
                        boxSize="50px"
                        objectFit="cover"
                        borderRadius="15px"
                    />
                </Square>
            </Box>
            <Box textAlign="left" ml="1.2rem" className={styles.textBox}>
                <Text fontSize="xl" mx="auto" fontWeight="bold">
                    {name}
                </Text>
                <Text fontSize="md" mx="auto" >
                    {title}
                </Text>
            </Box>
        </Flex>
        // </Stack> 

    )
}
