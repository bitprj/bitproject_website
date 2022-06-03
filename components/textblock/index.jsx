import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  Badge,
  Grid,
  Link,
  GridItem,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import * as React from "react";
import Fade from "react-reveal/Fade";

export const Textblock = ({ title, para1, para2 }) => (
  <Box bg="black" color="white" mx="auto">
    <Fade>
      <Container maxW="container.lg" p="15px">
        <Box
          maxW={{
            base: "xl",
            md: "7xl",
          }}
          mx="auto"
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="extrabold"
            lineHeight="1.2"
            letterSpacing="tight"
            textAlign="center"
          >
            {title}
          </Heading>
          <Flex
            align="flex-start"
            direction={{
              base: "column",
              lg: "row",
            }}
            justify="space-between"
            my="2rem"
          >
            <Text fontSize="lg" mr="3rem">
              {para1}
            </Text>
            <br></br>
            <Text fontSize="lg" mr="3rem">
              {para2}
            </Text>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, error! Eaque quia natus ipsa suscipit cumque, praesentium cupiditate delectus architecto?</p> */}
          </Flex>
        </Box>
      </Container>
    </Fade>
  </Box>
);
