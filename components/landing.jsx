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

export const Landing = ({ heading, description,cta1, cta2, image, logoImage, play, cta1link, cta2link, formActionButton, formActionButtonLink }) => {
  return (
    <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
      <Container
      maxW="container.lg"
    >
      <Fade>
      <Box as="section" bg="black"  pb="12" overflow="hidden" color="white">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Box textAlign="center">

          {logoImage && <Img
              alt="Page icon"
              src={logoImage}
              width="10%"
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
            direction={{ base: 'column', md: 'row' }}
            mt="10"
            mb="20"
            spacing="4"
          >
            <LightMode>
              {cta1 && <Button
                as="a"
                href={cta1link}
                size="lg"
                colorScheme="yellow"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                {cta1}
              </Button>}
              {cta2 && <Button
                as="a"
                href={cta2link}
                size="lg"
                colorScheme="blue"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                {cta2}
              </Button>}

              {formActionButton && <Box display="flex" alignItems="center">
              <FormControl id="email" mr="1rem" isRequired>
                <Input placeholder="email" border="none" bg="grey" />

              </FormControl>
              <Button
                as="a"
                href={formActionButtonLink}
                colorScheme="blue"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                {formActionButton}
              </Button>
              
              </Box>}
            </LightMode>
          </Stack>

        </Box>
        { image && 
          
          <Img 
              src={image}
              width="100%"
              // maxW="70rem"
              m="0 auto"
              mt="2rem"
              maxH="50vh"
              maxW ="60vw"
            />}
      </Box>
      </Fade>
      </Container>
    </Box>
    
  )
}