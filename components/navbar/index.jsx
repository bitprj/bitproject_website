import { Box, Flex, Text } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'

export const Navbar = () => (
  <Box bg="black" color="white" pt="1" position="sticky" top="0" zIndex="100">
    <Box as="header" height="16" position="relative" color="white">
      <Box
        height="100%"
        // mx="auto"
        px={{
          base: '8',
          md: '8',
        }}
        pe={{
          base: '8',
          md: '8',
        }}
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
          height="100%"
        >
          <Box as="a" href="/" rel="home">
            <Text 
              as="h1"
              // size="3xl"
              fontSize="xl"
              fontWeight="extrabold"
              maxW="48rem"
              >Bit Project</Text>
          </Box>
          
          <NavContent.Desktop
            display={{
              base: 'none',
              md: 'flex',
            }}
          />
          <NavContent.Mobile
            display={{
              base: 'flex',
              md: 'none',
            }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
)
