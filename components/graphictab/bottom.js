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
import Image from "next/image";

export const GraphicTabBottom = ({
  bold,
  heading,
  desc,
  logoImage,
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
  cta1,
  cta2,
  cta1link,
  cta2link,
  mutedText,
  underBold,
}) => {
  return (
    <Box as="section" bg="black" pt="24" pb="8" overflow="hidden" color="white">
      <Fade>
        <Container maxW="container.lg" p="15px" textAlign="center">
          {logoImage && (
            <Image
              alt="Page icon"
              src={logoImage}
              width="125px"
              height="125px"
              border="2px solid red"
              m="0 auto"
              my="15px"
            />
          )}
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

          <Text fontSize="xl" mx="auto" textAlign="center" fontWeight="bold">
            {bold}
          </Text>

          {underBold && (
            <Text color="gray.500" mt={"4px"}>
              {underBold}
            </Text>
          )}

          <Text
            fontSize="lg"
            my="15px"
            mx="auto"
            textAlign="center"
            maxW="40rem"
          >
            {desc}
          </Text>

          <Stack
            justify="center"
            direction={{ base: "column", md: "row" }}
            mt="10"
            spacing="4"
          >
            <LightMode>
              {cta1 && (
                <Button
                  as="a"
                  href={cta1link}
                  target="_blank"
                  size="lg"
                  color="white"
                  border="1px solid #2B6CB0"
                  bg="#2B6CB0"
                  rounded="0"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                  _hover={{
                    color: "white",
                    background: "#4e8dcf",
                  }}
                >
                  {cta1}
                </Button>
              )}
              {cta2 && (
                <Button
                  as="a"
                  href={cta2link}
                  target="_blank"
                  size="lg"
                  color="white"
                  rounded="0"
                  bg="transparent"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                  _hover={{
                    color: "white",
                    background: "#404040",
                  }}
                >
                  {cta2}
                </Button>
              )}
            </LightMode>
          </Stack>
          {mutedText && (
            <Text color="gray.500" mt={4} mb="10">
              {mutedText}
            </Text>
          )}

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
                  playing={true}
                  volume={0}
                  controls={true}
                  width="80%"
                  m="0 auto"
                  // loop="true"
                />
              </TabPanel>
              <TabPanel>
                <ReactPlayer
                  url={graphic2}
                  volume={0}
                  controls={true}
                  width="80%"
                  // loop="true"
                />
              </TabPanel>
              <TabPanel>
                <ReactPlayer
                  url={graphic3}
                  volume={0}
                  width="80%"
                  controls={true}
                  // loop="true"
                />
              </TabPanel>
            </TabPanels>
            <TabList border="0px" my="15px">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Tab
                  mx="0.3rem"
                  p="0.5rem"
                  borderRadius="0"
                  mb="2rem"
                  _selected={{ bg: "#1C1D25" }}
                  rounded="0"
                  _focus={{
                    border: "2px solid white",
                  }}
                >
                  <ProfileIcon pic={pic1} name={name1} title={title1} />
                </Tab>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Tab
                  mx="0.3rem"
                  p="0.5rem"
                  borderRadius="0"
                  mb="2rem"
                  _selected={{ bg: "#1C1D25" }}
                  rounded="0"
                  _focus={{
                    border: "2px solid white",
                  }}
                >
                  <ProfileIcon pic={pic2} name={name2} title={title2} />
                </Tab>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Tab
                  mx="0.3rem"
                  p="0.5rem"
                  borderRadius="0"
                  mb="2rem"
                  _selected={{ bg: "#1C1D25" }}
                  rounded="0"
                  _focus={{
                    border: "2px solid white",
                  }}
                >
                  <ProfileIcon pic={pic3} name={name3} title={title3} />
                </Tab>
              </motion.div>
            </TabList>
          </Tabs>
        </Container>
      </Fade>
    </Box>
  );
};
