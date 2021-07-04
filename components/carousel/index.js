import {
  Box,
  Text,
  useColorModeValue as mode,
  SimpleGrid,
  Container,
  Link
} from '@chakra-ui/react'

import * as React from 'react'

export const Carousel = ({ img1, img2, img3, link1, link2, link3 }) => {
  var bkg1 = { background: `linear-gradient(0deg, rgb(0,0,0) 10%, rgba(0, 0, 0, 0)), url(${img1})` };
  var bkg2 = { background: `linear-gradient(0deg, rgb(0,0,0) 10%, rgba(0, 0, 0, 0)), url(${img2})` };
  var bkg3 = { background: `linear-gradient(0deg, rgb(0,0,0) 10%, rgba(0, 0, 0, 0)), url(${img3})` };
  
  return (
    <Box as="section" bg="black" color="white">
      <Container
        maxW="container.lg"
        p="15px"
      >
        <SimpleGrid minChildWidth="180px" spacing="40px" bg="black">
        <Link href={link1} _hover="none">
          <Box w="100%"
              style={bkg1} pt="2rem" pb="5.5rem" maxW="xl" px="1rem">
              <Text fontSize="2xl" fontWeight="800" color="white">
                Dev ops for beginners
              </Text>
              <Text fontSize="md" mt="4" maxW="xl" mx="auto" color="white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </Box>
          </Link>

          <Link href={link2} _hover="none">
            <Box w="100%"
              style={bkg2} pt="2rem" pb="5.5rem" maxW="xl" px="1rem">
              <Text fontSize="2xl" fontWeight="800" color="white">
                Dev ops for beginners
              </Text>
              <Text fontSize="md" mt="4" maxW="xl" mx="auto" color="white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </Box>
          </Link>

          <Link href={link3} _hover="none">
            <Box w="100%"
              style={bkg3} pt="2rem" pb="5.5rem" maxW="xl" px="1rem">
              <Text fontSize="2xl" fontWeight="800" color="white">
                Dev ops for beginners
              </Text>
              <Text fontSize="md" mt="4" maxW="xl" mx="auto" color="white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </Box>
          </Link>
        </SimpleGrid>
      </Container>
    </Box>

  )
}