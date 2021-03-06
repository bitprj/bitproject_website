import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  LightMode,
  Container,
  Badge
} from '@chakra-ui/react'

import * as React from 'react'
import Fade from 'react-reveal/Fade';
import { motion } from "framer-motion"



export const CenterDualCol = ({ heading, description, cta1, cta2, cta1link, cta2link }) => {
  return (
    <Box as="section" bg="black" overflow="hidden" color="white">
      <Container
        maxW="container.lg"
        p="15px"
      >
        <Fade>
          <Box as="section" bg="black" color="white">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
              <Box textAlign="center">
                <Badge px="2" fontSize="1em" colorScheme="blue" rounded='0'>
                  WEEK 5-8
            </Badge>
                <Heading as="h2" size="xl" mt="8" fontWeight="extrabold">
                  {heading}
                </Heading>
                <Text fontSize="xl" mt="4" maxW="xl" mx="auto" >
                  {description}
                </Text>
              </Box>

              <Stack
                justify="center"
                direction={{ base: 'column', md: 'row' }}
                mt="10"
                spacing="4"
              >
                <LightMode>
                  {cta1 &&
                      <Button
                        as="a"
                        href={cta1link}
                        size="lg"
                        color="#fee761"
                        border="1px solid #fee761"
                        bg="transparent"
                        px="8"
                        fontWeight="bold"
                        fontSize="md"
                        _hover={{
                          color: "black",
                          background: "#fee761",
                          px: "12"
                        }}
                      >
                        {cta1}
                      </Button>

                  }
                  {cta2 &&
                      <Button
                        as="a"
                        href={cta2link}
                        size="lg"
                        border="1px solid #3583CE"
                        color="#3583CE"
                        bg="transparent"
                        px="8"
                        fontWeight="bold"
                        fontSize="md"
                        _hover={{
                          color: "white",
                          background: "#3583CE",
                          px: "12"
                        }}
                      >
                        {cta2}
                      </Button>
                  }
                </LightMode>
              </Stack>

            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>

  )
}