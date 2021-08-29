import { Box, Flex, Text, Img } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'
import { motion, MotionConfig } from "framer-motion"
import Image from "next/image";

export const Navbar = () => (
  <Box bg="black" color="white" pt="1" position="sticky" top="0" zIndex="100">
    {/* <style jsx global>
      {`
                    .logo { 
                        margin-right: 1rem !important; 
                        margin-top: -1rem !important; 
                        display: inline !important;
                    }
                    
                `}
    </style> */}
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
              height="9"
              // width="50px"
              alt="logo"
              display="inline"
              // className="logo"
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
