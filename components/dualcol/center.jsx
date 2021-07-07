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
    <Box as="section" bg="black" pb="12" overflow="hidden" color="white">
      <Container
        maxW="container.lg"
        p="15px"
      >
        <Fade>
          <Box as="section" bg="black" color="white">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
              <Box textAlign="center">
                <Badge px="2" fontSize="1em" colorScheme="blue">
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
                mb="20"
                spacing="4"
              >
                <LightMode>
                  {cta1 &&

                    <motion.span whileHover={{ scale: 1.1 }}>
                      <Button
                        w="10rem"
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
                          background: "#fee761"
                        }}
                      >
                        {cta1}
                      </Button>
                    </motion.span>

                  }
                  {cta2 &&
                    <motion.span whileHover={{ scale: 1.1 }}>
                      <Button
                        w="10rem"
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
                          background: "#3583CE"
                        }}
                      >
                        {cta2}
                      </Button>
                    </motion.span>

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