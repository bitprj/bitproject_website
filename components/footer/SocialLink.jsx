import { chakra, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const SocialLink = (props) => (
  <chakra.a
    rounded="lg"
    w="10"
    h="10"
    fontSize="xl"
    target="_blank"
    display="flex"
    alignItems="center"
    justifyContent="center"
    transition="all 0.2s"
    _hover={{
      bg: useColorModeValue('gray.100', 'whiteAlpha.100'),
      color: useColorModeValue('blue.500', 'blue.300'),
    }}
    {...props}
  />
)
