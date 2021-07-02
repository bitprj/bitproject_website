import {
  Box,
  Text,
  useColorModeValue as mode,
  SimpleGrid,
  Container
} from '@chakra-ui/react'

import * as React from 'react'

export const Carousel = ({ img1, img2, img3, img4 }) => {
  var bkg1 = { background: `linear-gradient(0deg, rgb(0,0,0) 10%, rgba(0, 0, 0, 0)), url(${img1})` };
  var bkg2 = { background: `linear-gradient(0deg, rgb(0,0,0) 10%, rgba(0, 0, 0, 0)), url(${img2})` };
  var bkg3 = { background: `linear-gradient(0deg, rgb(0,0,0) 10%, rgba(0, 0, 0, 0)), url(${img3})` };
  var bkg4 = { background: `linear-gradient(0deg, rgb(0,0,0) 10%, rgba(0, 0, 0, 0)), url(${img4})` };

  return (
    <Box as="section" bg="black" color="white">
      <Container
      maxW="container.lg"
      p="15px"
    >
      <SimpleGrid minChildWidth="180px" spacing="40px" bg="black">
        <Box w="100%"
          style={bkg1}>

            <Text fontSize="2xl" fontWeight="800" my="2rem" maxW="xl" mx="1rem" color="white">
              Dev ops for beginners
            </Text>

          </Box>

          <Box w="100%"
          style={bkg2} pt="2rem" pb="5.5rem" maxW="xl" px="1rem">

            <Text fontSize="2xl" fontWeight="800"  color="white">
              Dev ops for beginners
            </Text>
            <Text fontSize="md" mt="4" maxW="xl" mx="auto" color="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>

          </Box>
          <Box w="100%"
          style={bkg3}>

            <Text fontSize="2xl" fontWeight="800" my="2rem" maxW="xl" mx="1rem" color="white">
              Dev ops for beginners
            </Text>

          </Box>
      </SimpleGrid>
      </Container>
    </Box>

  )
}