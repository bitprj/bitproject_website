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
  FormControl,
  Input
} from '@chakra-ui/react'

import * as React from 'react'
import Fade from 'react-reveal/Fade';
import * as fetch from 'node-fetch'

export const Landing = ({ heading, description, cta1, cta2, image, logoImage, play, cta1link, cta2link, formResponse, formActionButton, formDesc }) => {
  const subscribeEmail = async event => {
    let email = document.getElementById('email').value
    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (email == "") {
      return;
    }
    else if (!emailRegex.test(email)) {
      return;
    }
    console.log(`Subscribing ${email} to newsletter...`)

    const res = await fetch(`/api/subscribe`,
      {
        body: JSON.stringify({
          email: email
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST'
      }
    )

    let result = await res.json()
    document.getElementById('formResponse').innerText = formResponse
    document.getElementById('email').remove()
    document.getElementById('signup').remove()
    console.log(result)
  }

  return (
    <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
      <Container
        maxW="container.lg"
      >
        <Fade>
          <Box as="section" bg="black" pb="12" overflow="hidden" color="white">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
              <Box textAlign="center">

                {logoImage && <Img
                  alt="Page icon"
                  src={logoImage}
                  width="100px"
                  m="0 auto"
                />}

                <Heading
                  as="h1"
                  size="2xl"
                  fontWeight="extrabold"
                  maxW="48rem"
                  mx="auto"
                  lineHeight="1.2"
                  letterSpacing="tight"
                >
                  {heading}
                </Heading>
                <Text fontSize="lg" mt="4" maxW="xl" mx="auto" >
                  {description}
                </Text>
              </Box>

              <Stack
                justify="center"
                padding="0"
                direction={{ base: 'column', md: 'row' }}
                mt="10"
                mb="20"
                spacing="4"
              >
                <LightMode>
                  {cta1 &&

                    // <motion.div whileHover={{ scale: 1.1 }} textAlign="center" width="100rem">
                    <Button
                      as="a"
                      href={cta1link}
                      target="_blank"
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
                    // </motion.div>

                  }
                  {cta2 &&
                    // <motion.span whileHover={{ scale: 1.1 }}>
                    <Button
                      as="a"
                      href={cta2link}
                      target="_blank"
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
                    // </motion.span>

                  }

                  {formActionButton && <> <Box display="flex" alignItems="center">
                    <FormControl mr="1rem" isRequired>
                      <Input id="email" placeholder="email" border="1px" borderColor="#404040" bg="#404040" _hover=""
                        _focus="" color="white" _placeholder={{ color: 'white' }} />

                    </FormControl>
                    <Button
                      id="signup"
                      onClick={subscribeEmail}
                      bg="#2B6CB0"
                      border="1px solid #2B6CB0"
                      px="8"
                      color="white"
                      fontWeight="bold"
                      fontSize="md"
                      _hover={{
                        color: "white",
                        background: "#4e8dcf",
                      }}
                    >
                      {formActionButton}
                    </Button>
                  </Box>
                    <Box textAlign="center">
                      <Text id="formResponse" fontSize="lg" mt="4" maxW="xl" mx="auto" />
                    </Box>
                  </>
                  }

                </LightMode>
              </Stack>

            </Box>
            {image &&
              <Img
                src={image}
                width="100%"
                m="0 auto"
                mt="2rem"
              />}

          </Box>
        </Fade>
      </Container>
    </Box>
  )
}
