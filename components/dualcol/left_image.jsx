import {
    Box,
    Heading,
    Text,
    useColorModeValue as mode,
    Container,
    Img
} from '@chakra-ui/react'

import ReactPlayer from "react-player"
import * as React from 'react'
import Fade from 'react-reveal/Fade';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Image from 'next/image'
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import { motion } from "framer-motion"

export const DualColLeftImage = ({ heading, desc, tab1Graphic, tab2Graphic, tab3Graphic, tab1Head, tab2Head, tab3Head, tab1Desc, tab2Desc, tab3Desc }) => {
    return (

        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <style jsx global>
                {`
                @media (max-width: 600px) {
                    .hide-small {
                      display: none;
                      border: 2px solid red;
                    }
                  }
                `}
            </style>

            <Fade>
                <Container
                    maxW="container.lg"
                    p="15px"
                >
                    <Heading as="h2" size="xl" mt="8" fontWeight="extrabold">
                        {heading}
                    </Heading>
                    <Text mt="3" fontSize="xl">
                        {desc}
                    </Text>

                    <Tabs
                        mt="2rem"
                        padding="0"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                    >
                        <TabPanels margin="0">
                            <TabPanel >
                                <Image src={tab1Graphic} width="800" height="500" alt="counselorbot image" />
                            </TabPanel>
                            <TabPanel>
                                <Image src={tab2Graphic} width="800" height="500" alt="counselorbot image" />
                            </TabPanel>
                            <TabPanel>
                                <Image src={tab3Graphic} width="800" height="500" alt="counselorbot image" />
                            </TabPanel>
                        </TabPanels>
                        <TabList border="0px">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Tab mx="0.5rem" p="0.3rem" borderRadius="0" mb="1rem" _selected={{ bg: "#1C1D25" }}
                                >
                                    <Box textAlign="left">
                                        <Heading
                                            as="h4"
                                            size="sm"
                                            fontWeight="extrabold"
                                            display="block"
                                        >
                                            {tab1Head}
                                        </Heading>
                                        <Text fontSize="sm" className="hide-small" color="grey">
                                            {tab1Desc}
                                        </Text>
                                    </Box>
                                </Tab>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Tab mx="0.5rem" p="0.3rem" borderRadius="0" mb="1rem" _selected={{ bg: "#1C1D25" }}
                                ><Box textAlign="left">
                                        <Heading
                                            as="h4"
                                            size="sm"
                                            fontWeight="extrabold"
                                            display="block"
                                        >
                                            {tab2Head}
                                        </Heading>
                                        <Text fontSize="sm" className="hide-small" color="grey">
                                            {tab2Desc}
                                        </Text>
                                    </Box></Tab>

                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Tab mx="0.5rem" p="0.3rem" borderRadius="0" _selected={{ bg: "#1C1D25" }}
                                ><Box textAlign="left">
                                        <Heading
                                            as="h4"
                                            size="sm"
                                            fontWeight="extrabold"
                                            display="block"
                                        >
                                            {tab3Head}
                                        </Heading>
                                        <Text fontSize="sm" className="hide-small" color="grey">
                                            {tab3Desc}
                                        </Text>
                                    </Box></Tab>

                            </motion.div>


                        </TabList>
                    </Tabs>
                </Container>
            </Fade>
        </Box >

    )
}