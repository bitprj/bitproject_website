import {
    Box,
    Button,
    Heading,
    Img,
    Stack,
    Text,
    useColorModeValue as mode,
    LightMode,
    Container,
    FormControl,
    Input
} from '@chakra-ui/react'

import * as React from 'react'
import Fade from 'react-reveal/Fade';
import * as fetch from 'node-fetch'
import Image from 'next/image'
import { ProfileIcon } from '../profileicon'

export const Landing = ({ heading, description, cta1, cta2, image, logoImage, play, cta1link, cta2link, formResponse, formActionButton, formDesc }) => {
    return (
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <Container
                maxW="container.lg"
            >
                <Fade>
                    <Box as="section" bg="black" pb="12" overflow="hidden" color="white">
                        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                            <Box textAlign="center">
                                <ProfileIcon
                                    pic="/counselor.svg"
                                    name="CounselorBot"
                                    m="0 auto"
                                // title="dasfasd"
                                />

                                <Heading
                                    as="h1"
                                    size="2xl"
                                    fontWeight="extrabold"
                                    maxW="48rem"
                                    mx="auto"
                                    lineHeight="1.2"
                                    letterSpacing="tight"
                                >
                                    {heading}
                                </Heading>
                                <Text fontSize="lg" mt="4" maxW="xl" mx="auto" >
                                    {description}
                                </Text>
                            </Box>

                            <Stack
                                justify="center"
                                padding="0"
                                direction={{ base: 'column', md: 'row' }}
                                mt="10"
                                mb="20"
                                spacing="4"
                            >
                                <LightMode>
                                    {cta1 &&

                                        // <motion.div whileHover={{ scale: 1.1 }} textAlign="center" width="100rem">
                                        <Button
                                            as="a"
                                            href={cta1link}
                                            target="_blank"
                                            size="lg"
                                            color="white"
                                            border="1px solid white"
                                            bg="transparent"
                                            px="8"
                                            fontWeight="bold"
                                            fontSize="md"
                                            _hover={{
                                                color: "black",
                                                background: "white",
                                            }}
                                        >
                                            {cta1}
                                        </Button>
                                        // </motion.div>

                                    }
                                    {cta2 &&
                                        // <motion.span whileHover={{ scale: 1.1 }}>
                                        <Button
                                            as="a"
                                            href={cta2link}
                                            target="_blank"
                                            size="lg"
                                            border="1px solid white"
                                            color="black"
                                            bg="white"
                                            px="8"
                                            fontWeight="bold"
                                            fontSize="md"
                                            _hover={{
                                                background: "#edebeb",
                                            }}
                                        >
                                            {cta2}
                                        </Button>
                                        // </motion.span>

                                    }

                                    {formActionButton && <> <Box display="flex" alignItems="center">
                                        <FormControl mr="1rem" isRequired>
                                            <Input id="email" placeholder="email" border="1px" borderColor="#404040" bg="#404040" _hover=""
                                                _focus="" color="white" _placeholder={{ color: 'white' }} />

                                        </FormControl>
                                        <Button
                                            id="signup"
                                            onClick={subscribeEmail}
                                            bg="#2B6CB0"
                                            border="1px solid #2B6CB0"
                                            px="8"
                                            color="white"
                                            fontWeight="bold"
                                            fontSize="md"
                                            _hover={{
                                                color: "white",
                                                background: "#4e8dcf",
                                            }}
                                        >
                                            {formActionButton}
                                        </Button>
                                    </Box>
                                        <Box textAlign="center">
                                            <Text id="formResponse" fontSize="lg" mt="4" maxW="xl" mx="auto" />
                                        </Box>
                                    </>
                                    }

                                </LightMode>
                            </Stack>

                        </Box>
                        {image &&
                            <Image
                                alt="maingif"
                                src={image}
                                m="0 auto"
                                mt="2rem"
                                height="400px"
                                width="1000px"
                            />}

                    </Box>
                </Fade>
            </Container>
        </Box>
    )
}
