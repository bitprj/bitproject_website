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
    Stack,
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import * as React from 'react'
export const DescDualCol = ({ categoryLogo, heading, desc, profile, profileLogo, cta1, cta1Link, cta2Link, cta2, pic }) => {
    return (
        <Box as="section" bg="black" pt="5px" pb="0px" overflow="hidden" color="white" w="100%">
            
                <Box
                    margin="0"
                >
                    <Stack
                        direction={{
                            base: 'column',
                            lg: 'column',
                        }}
                        spacing={{
                            base: '1rem',
                            lg: '0rem',
                        }}

                        align={{
                            lg: 'center',
                        }}
                        justify="start"
                        display="flex"
                    >
                         { pic && 
                        <Img
                            pos="relative"
                            zIndex="1"
                            maxH="45vh" // change this line for the image height
                            objectFit="scale-down"
                            src={pic}
                        />}


                        <Box
                            w={{
                                base: 'full',
                            }}
                            h={{
                                base: 'auto',
                            }}
                            display="flex"
                            alignItems="center"
                        >


                            <Box
                                
                            >
                                {categoryLogo && <Wrap>
                                    <WrapItem>
                                        <Avatar src={categoryLogo} bg="transparent" />
                                    </WrapItem>
                                </Wrap>}
                                <Heading mt="4" as="h2" size="xl" fontWeight="extrabold" lineHeight="3rem">
                                    {heading}
                                </Heading>

                                <Text mt="15px" fontSize="xl" color="#CDCDD2 ">
                                    {desc}
                                </Text>
                                <Wrap>
                                    <WrapItem>
                                        {profileLogo && 
                                            <Avatar src={profileLogo} bg="transparent" />}
                                        
                                        {profile && <Text fontSize="xl" my="2" ml="2" color="#CDCDD2">
                                            {profile}
                                        </Text>}
                                    </WrapItem>
                                </Wrap>

                                <Stack
                                    direction={{
                                        base: 'column',
                                        md: 'row',
                                    }}
                                    spacing="4"
                                    mt="8"
                                >
                                    <Stack direction="row">
                                        {cta1 && <Badge bg="#575757" color="#FFFFFF" px="3" py="2">
                                            <Link href={cta1Link}isExternal>
                                                {cta1}
                                            </Link>
                                        </Badge>}

                                        {cta2 && <Badge bg="#575757" color="#FFFFFF" px="3" py="2">
                                            <Link href={cta2Link}isExternal>
                                                {cta2}
                                            </Link>
                                        </Badge>}
                                    </Stack>
                                </Stack>
                            </Box>




                        </Box>


                    </Stack>
                </Box>

        </Box>

    )
}
