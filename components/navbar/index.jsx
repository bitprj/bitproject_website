import { Box, Flex, Text, Img } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'
import { motion, MotionConfig } from "framer-motion"

export const Navbar = ({ bg }) => (
  <Box bg={bg ? bg : "black"} color="white" pt="1" position="sticky" top="0" zIndex="100">
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
          <motion.a href="/" whileHover={{ scale: 1.1 }}>
            <Img
              src="/logo.png"
              h="9"
              display="inline"
              mr="3"
              mt="-1"
            />
            <Text
              as="h1"
              // size="3xl"
              fontSize="xl"
              fontWeight="extrabold"
              maxW="48rem"
              display="inline"
            >Bit Project</Text>
          </motion.a>


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
