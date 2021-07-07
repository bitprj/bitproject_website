import {
    Box,
    Flex,
    Img,
    Text,
    Square,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import styles from './ProfileIcon.module.css';
import Image from 'next/image'

export const ProfileIcon = ({ pic, name, title }) => {

   
    // var direct;
    // useEffect(() => {
        
    //     window.addEventListener('resize', () => {
    //         const myWidth = window.innerWidth;
    //         if (myWidth <= 600) {
    //             direct = "column"
    //         }
    //         else {
    //             direct = "row"
    //         }

    //     })
    // })

    return (

        // <Stack color="white" px="0.5rem" borderRadius="15px" alignItems="center" direction={undefined}>
         <Flex color="white" px="0.5rem" borderRadius="15px" alignItems="center">
            <Box className={styles.pfp}>
                <Square size="">
                    <Img
                        mr="1.2rem"
                        src={pic}
                        height="50px"
                        width="50px"
                        objectFit="cover"
                        borderRadius="50px"
                    />
                </Square>
            </Box>
            {/* <Box textAlign="left" ml="1.2rem" className={styles.textBox}> */}
            <Box textAlign="left">
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
