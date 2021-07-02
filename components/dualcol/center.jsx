import {
    Box,
    Button,
    Circle,
    Heading,
    Img,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue as mode,
    LightMode,
    Center,
    Container,
    Badge
  } from '@chakra-ui/react'
  
  import * as React from 'react'
  import Fade from 'react-reveal/Fade';
  
  export const CenterDualCol = ({ heading, description,cta1, cta2, image, logoImage, play, cta1link, cta2link }) => {
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
                <Button
                  as="a"
                  href={cta1link}
                  size="lg"
                  colorScheme="yellow"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                >
                  {cta1}
                </Button>
                <Button
                  as="a"
                  href={cta2link}
                  size="lg"
                  colorScheme="blue"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                >
                  {cta2}
                </Button>
              </LightMode>
            </Stack>
  
          </Box>
        </Box>
        </Fade>
        </Container>
      </Box>
      
    )
  }