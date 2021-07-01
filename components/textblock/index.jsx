import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  Badge,
  Grid,
  Link,
  GridItem,
  useColorModeValue as mode,
} from '@chakra-ui/react'

import * as React from 'react'
// import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
// import { Logo } from './Logo'
// import { SocialMediaLinks } from './SocialMediaLinks'
// import { SubscribeForm } from './SubscribeForm'
import Fade from 'react-reveal/Fade';


export const Textblock = ({ title, para1, para2 }) => (

  <Box
    bg="black"
    color="white"
    >
      <Fade>
    <Container
      maxW="container.lg"
      p="15px"
    >
            <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        
      >
      <Heading
      as="h1"
      size="3xl"
      fontWeight="extrabold"
      maxW="48rem"
      lineHeight="1.2"
      letterSpacing="tight"
    >
      {title}
    </Heading>
        <Flex
          align="flex-start"
          direction={{
            base: 'column',
            lg: 'row',
          }}
          justify="space-between"
          my="2rem"
        > 
          <Text mt="5" fontSize="xl">{para1}</Text>
          <Text mt="5" fontSize="xl">{para2}</Text>
      {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, error! Eaque quia natus ipsa suscipit cumque, praesentium cupiditate delectus architecto?</p> */}
    </Flex>
    </Box>
    
    </Container>
    </Fade>
  </Box>
)

