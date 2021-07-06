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

export const GraphicTabBottom = ({ heading, desc, logoImage, name1, pic1, title1, graphic1, name2, pic2, title2, graphic2, name3, pic3, title3, graphic3, name4, title4, pic4, graphic4, cta1, cta2, cta1link, cta2link }) => {
    return (
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <Fade>
                <Container
                    maxW="container.lg">
      
                    {logoImage && <Img
                        alt="Page icon"
                        src={logoImage}
                        width="10%"
                        m="0 auto"
                        my="15px"
                    />}
                    <Heading
                        as="h1"
                        size="2xl"
                        fontWeight="extrabold"
                        mx="auto"
                        my="15px"
                        textAlign="center"
                        lineHeight="1.2"
                        letterSpacing="tight"
                    >
                        {heading}
                    </Heading>

                    <Text fontSize="lg" my="15px" mx="auto" textAlign="center" maxW="40rem">
                        {desc}
                    </Text>

                    <Stack
                        justify="center"
                        direction={{ base: 'column', md: 'row' }}
                        mt="10"
                        mb="10"
                        spacing="4"
                    >
                        <LightMode>
                            {cta1 && <Button
                                as="a"
                                href={cta1link}
                                size="lg"
                                colorScheme="yellow"
                                px="8"
                                fontWeight="bold"
                                fontSize="md"
                            >
                                {cta1}
                            </Button>}
                            {cta2 && <Button
                                as="a"
                                href={cta2link}
                                size="lg"
                                colorScheme="blue"
                                px="8"
                                fontWeight="bold"
                                fontSize="md"
                            >
                                {cta2}
                            </Button>}
                        </LightMode>
                    </Stack>
                    <Tabs
                        orientation={{ base: "vertical", lg: "horizontal" }}
                        mt="2rem"
                        align="center"
                        border="0px"
                    >
                        <TabPanels mt="10">
                            <TabPanel>
                                <ReactPlayer
                                    url={graphic1}
                                    playing="true"
                                    volume="0"
                                    controls="true"
                                    width="100%"
                                    // maxW="70rem"
                                    m="0 auto"
                                    // maxH="20rem"
                                    loop="true"
                                />
                            </TabPanel>
                            <TabPanel>
                                <ReactPlayer
                                    url={graphic2}
                                    playing="true"
                                    volume="0"
                                    controls="true"
                                    width="100%"
                                    loop="true"
                                />
                            </TabPanel>
                            <TabPanel>
                                <ReactPlayer
                                    url={graphic3}
                                    playing="true"
                                    volume="0"
                                    controls="true"
                                    width="100%"
                                    loop="true"
                                />
                            </TabPanel>
                        </TabPanels>
                        <TabList border="0px" my="15px">
                            <Tab mx="0.3rem" p="0.5rem" borderRadius="10px" mb="2rem" _selected={{ bg: "#1C1D25" }}
                            ><ProfileIcon
                                    pic={pic1}
                                    name={name1}
                                    title={title1}
                                /></Tab>
                            <Tab mx="0.3rem" p="0.5rem" borderRadius="10px" mb="2rem" _selected={{ bg: "#1C1D25" }}
                            ><ProfileIcon
                                    pic={pic2}
                                    name={name2}
                                    title={title2}
                                /></Tab>
                            <Tab mx="0.3rem" p="0.5rem" borderRadius="10px" mb="2rem" _selected={{ bg: "#1C1D25" }}
                            ><ProfileIcon
                                    pic={pic3}
                                    name={name3}
                                    title={title3}
                                /></Tab>
                        </TabList>
                    </Tabs>


                </Container>
            </Fade>
        </Box>

    )
}