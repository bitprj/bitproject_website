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
  SimpleGrid,
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
            size="md"
            // fontWeight="extrabold"
            lineHeight="1.2"
            letterSpacing="tight"
            textAlign="center"
          >
            {title}
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            alignItems="center"
            spacing={24}
          >
            <Box textAlign="center">
              <Link href="https://www.microsoft.com/en-us/" isExternal>
                <Img src="/Microsoft-Logo.png" mx="auto" />
              </Link>
            </Box>

            <Box textAlign="center">
              <Link href="https://www.courier.com/" isExternal>
                <Img src="/courier.png" mx="auto" />
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Fade>
  </Box>
);
