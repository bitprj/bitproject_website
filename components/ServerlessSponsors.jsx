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

export const ServerlessSponsors = ({ title }) => (
  <Box bg="black" color="white" mx="auto">
    <Fade>
      <Container maxW="container.lg" p="15px">
        <Box
          maxW={{
            base: "xl",
            md: "7xl",
          }}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="extrabold"
            lineHeight="1.2"
            letterSpacing="tight"
            textAlign="left"
          >
            {title}
          </Heading>

          <Box textAlign="left">
            <Link href="https://www.microsoft.com/en-us/" isExternal>
              <Img src="/Microsoft-Logo.png" h="150px" />
            </Link>
          </Box>
        </Box>
      </Container>
    </Fade>
  </Box>
);
