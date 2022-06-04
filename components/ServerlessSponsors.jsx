import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  HStack,
  Grid,
  Link,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import * as React from "react";
import Fade from "react-reveal/Fade";

export const ServerlessSponsors = ({ title }) => (
  <Box bg="black" color="white" mx="auto" id="sponsors">
    <Fade>
      <Container maxW="container.lg" p="15px">
        <Box
          maxW={{
            base: "xl",
            md: "7xl",
          }}
        >
          <Heading
            as="h2"
            size="xl"
            mt="8"
            fontWeight="extrabold"
            textAlign="center"
          >
            {title}
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            alignItems="center"
            spacing={24}
            mb={{ base: 8, lg: 4 }}
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

          <HStack justifyContent="center">
            <Button
              as="a"
              href="mailto:info@bitproject.org"
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
              Email Us
            </Button>

            <Button
              as="a"
              href="https://plucky-singer-a26.notion.site/Serverless-Camp-Sponsorship-Prospectus-1659e155cc0c4c03bb16d865e1feed5f"
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
              Interested in Sponsoring?
            </Button>
          </HStack>
        </Box>
      </Container>
    </Fade>
  </Box>
);
