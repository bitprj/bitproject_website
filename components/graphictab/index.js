import {
    Box,
    Button,
    Circle,
    Heading,
    Img,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue as mode,
    LightMode,
    Center,
    Container,
    FormControl,
    FormLabel,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from '@chakra-ui/react'

import ReactPlayer from "react-player"
import * as React from 'react'
import Fade from 'react-reveal/Fade';
import { ProfileIcon } from '../profileicon'

export const GraphicTab = ({ heading, desc, name1, pic1, title1, graphic1, name2, pic2, title2, graphic2, name3, pic3, title3, graphic3, name4, title4, pic4, graphic4 }) => {
    return (
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <Container
                maxW="container.lg"
                p="15px"
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="extrabold"
                    maxW="32rem"
                    mx="auto"
                    textAlign="center"
                    lineHeight="1.2"
                    letterSpacing="tight"
                >
                    {heading}
                </Heading>

                <Text fontSize="xl" mt="4" mx="auto" textAlign="center">
                    {desc}
                </Text>

                <Tabs
                    orientation={{ base: "vertical", lg: "horizontal" }}
                    mt="2rem"
                    align="center"
                    border="0px"
                >
                    <TabList border="0px" mx="1rem">
                        <Tab p="0.5rem" borderRadius="10px" mb="2rem" _selected={{ bg: "#1C1D25" }}
                        ><ProfileIcon
                                pic={pic1}
                                name={name1}
                                title={title1}
                            /></Tab>
                        <Tab p="0.5rem" borderRadius="10px" mb="2rem" _selected={{ bg: "#1C1D25" }}
                        ><ProfileIcon
                                pic={pic2}
                                name={name2}
                                title={title2}
                            /></Tab>
                        <Tab p="0.5rem" borderRadius="10px" mb="2rem" _selected={{ bg: "#1C1D25" }}
                        ><ProfileIcon
                                pic={pic3}
                                name={name3}
                                title={title3}
                            /></Tab>
                    </TabList>

                    <TabPanels mt="5">
                        <TabPanel>
                        <ReactPlayer
                                url={graphic1}
                                playing="true"
                                volume="0"
                                controls="true"
                                width="100%"
                                // maxW="70rem"
                                m="0 auto"
                                maxH="20rem"
                            />
                        </TabPanel>
                        <TabPanel>
                            <ReactPlayer
                                url={graphic2}
                                playing="true"
                                volume="0"
                                controls="true"
                                width="100%"
                            />
                        </TabPanel>
                        <TabPanel>
                            <ReactPlayer
                                url={graphic3}
                                playing="true"
                                volume="0"
                                controls="true"
                                width="100%"
                            />
                        </TabPanel>
                        <TabPanel>
                            <ReactPlayer
                                url={graphic4}
                                playing="true"
                                volume="0"
                                controls="true"
                                width="100%"
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>


            </Container>
        </Box>

    )
}