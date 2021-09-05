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

export const ProfileIcon = (props) => {


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
        <Flex color="white" px="0.5rem" borderRadius="15px" alignItems="center" justifyContent="center" {...props} >
            <style jsx global>
                {`
                .profileImage { 
                    border-radius: 50%;
                    object-fit: cover !important;
                }
            `}
            </style>
            <Box className={styles.pfp}>
                <Square>
                    <Image
                        className="profileImage"
                        alt={props.pic}
                        src={props.pic}
                        height="50px"
                        width="50px"
                    />
                </Square>
            </Box>
            {/* <Box textAlign="left" ml="1.2rem" className={styles.textBox}> */}
            <Box textAlign="left">
                <Text fontSize="xl" mx="auto" fontWeight="bold">
                    {props.name}
                </Text>
                <Text fontSize="md" mx="auto" >
                    {props.title}
                </Text>
            </Box>
        </Flex>
        // </Stack> 

    )
}
