import {
  Box,
  Heading,
  Text,
  useColorModeValue as mode,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import ReactPlayer from "react-player";
import * as React from "react";
import Fade from "react-reveal/Fade";
import { ProfileIcon } from "../profileicon";
import { motion } from "framer-motion";

export const GraphicTab = ({
  heading,
  desc,
  name1,
  pic1,
  title1,
  graphic1,
  name2,
  pic2,
  title2,
  graphic2,
  name3,
  pic3,
  title3,
  graphic3,
  name4,
  title4,
  pic4,
  graphic4,
}) => {
  return (
    <Box
      as="section"
      bg="black"
      pt="24"
      pb="12"
      overflow="hidden"
      color="white"
    >
      <Fade>
        <Container maxW="container.lg" p="15px">
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

          <Text fontSize="lg" mt="4" mx="auto" textAlign="center">
            {desc}
          </Text>

          <Tabs
            orientation={{ base: "vertical", lg: "horizontal" }}
            mt="2rem"
            align="center"
            border="0px"
          >
            <TabList border="0px">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Tab
                  mx="1rem"
                  p="0.5rem"
                  borderRadius="0"
                  mb="2rem"
                  _selected={{ bg: "#1C1D25" }}
                  rounded="0"
                >
                  <ProfileIcon pic={pic1} name={name1} title={title1} />
                </Tab>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Tab
                  mx="1rem"
                  p="0.5rem"
                  borderRadius="0"
                  mb="2rem"
                  _selected={{ bg: "#1C1D25" }}
                  rounded="0"
                >
                  <ProfileIcon pic={pic2} name={name2} title={title2} />
                </Tab>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Tab
                  mx="1rem"
                  p="0.5rem"
                  borderRadius="0"
                  mb="2rem"
                  _selected={{ bg: "#1C1D25" }}
                  rounded="0"
                >
                  <ProfileIcon pic={pic3} name={name3} title={title3} />
                </Tab>
              </motion.div>
            </TabList>

            <TabPanels mt="5">
              <TabPanel>
                <ReactPlayer
                  url={graphic1}
                  playing={true}
                  volume={0}
                  controls={true}
                  width="100%"
                  m="0 auto"
                  // loop="true"
                />
              </TabPanel>
              <TabPanel>
                <ReactPlayer
                  url={graphic2}
                  // playing="true"
                  volume={0}
                  controls={true}
                  width="100%"
                  // loop="true"
                />
              </TabPanel>
              <TabPanel>
                <ReactPlayer
                  url={graphic3}
                  // playing="true"
                  volume={0}
                  controls={true}
                  width="100%"
                  // loop="true"
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Fade>
    </Box>
  );
};
