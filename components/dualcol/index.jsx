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
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import * as React from "react";

export const DualCol = ({
  bg,
  preheading,
  heading,
  para1,
  para2,
  li1,
  li2,
  li3,
  img,
  action,
  actionLink,
}) => {
  if (img) {
    return (
      <Box
        as="section"
        bg={bg ? bg : "black"}
        pt="6"
        pb="6"
        overflow="hidden"
        color="white"
      >
        <Container maxW="container.lg" p="15px">
          <Box
            maxW={{
              base: "xl",
              md: "7xl",
            }}
            mx="auto"
          >
            <Fade>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                alignItems="center"
              >
                <Box>
                  <Badge px="2" fontSize="1em" colorScheme="blue" rounded="0">
                    {preheading}
                  </Badge>

                  <Heading as="h2" fontSize="3xl" mt="8" fontWeight="extrabold">
                    {heading}
                  </Heading>
                  <Text mt="5" fontSize="lg">
                    {para1}
                  </Text>
                  <Text mt="5" fontSize="lg">
                    {para2}
                  </Text>

                  <Text mt="5" fontSize="lg">
                    {li1}
                  </Text>
                  <Text mt="5" fontSize="lg">
                    {li2}
                  </Text>
                  <Text mt="5" fontSize="lg">
                    {li3}
                  </Text>
                </Box>
                <Box
                  maxW={{
                    base: "xl",
                    md: "7xl",
                  }}
                  mx="auto"
                >
                  <Img
                    margin="3rem auto"
                    src={img}
                    alt="Counselorbot picture"
                  />
                </Box>
              </SimpleGrid>
            </Fade>
          </Box>
        </Container>
      </Box>
    );
  } else {
    return (
      <Box
        as="section"
        bg={bg ? bg : "black"}
        pt="6"
        pb="6"
        overflow="hidden"
        color="white"
      >
        <Container maxW="container.lg" p="15px">
          <Box
            maxW={{
              base: "xl",
              md: "7xl",
            }}
            mx="auto"
          >
            <Fade>
              <Box>
                <Badge px="2" fontSize="1em" colorScheme="blue">
                  {preheading}
                </Badge>

                <Heading as="h2" size="xl" mt="5" fontWeight="extrabold">
                  {heading}
                </Heading>
                <Text mt="5" fontSize="xl">
                  {para1}
                </Text>
                <Text mt="5" fontSize="xl">
                  {para2}
                </Text>

                <Text mt="5" fontSize="xl">
                  {li1}
                </Text>
                <Text mt="5" fontSize="xl">
                  {li2}
                </Text>
                <Text mt="5" fontSize="xl">
                  {li3}
                </Text>
              </Box>
            </Fade>
          </Box>
        </Container>
      </Box>
    );
  }
};
