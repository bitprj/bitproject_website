import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  Badge,
  Link,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import * as React from 'react'
import * as Logos from './Brands'
export const DualCol  = ( {preheading, heading, para1, para2, li1, li2, li3, img, action, actionLink} ) => {
  return (
    <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
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
            <Fade>
        <Flex
          align="flex-start"
          direction={{
            base: 'column',
            lg: 'row',
          }}
          justify="space-between"
          mb="20"
        >
          <Box
            flex="1"
            maxW={{
              lg: 'xl',
            }}
            pt="6"
          >
             <Badge px="2" fontSize="1em" colorScheme="blue">
              {preheading}
            </Badge>

            <Heading as="h2" size="xl" mt="8" fontWeight="extrabold">
              {heading}
            </Heading>
            <Text mt="5" fontSize="xl">
              {para1}
            </Text>
            <Text mt="5" fontSize="xl">
              {para2}
            </Text>

            <Text mt="5" fontSize="xl">
              {li1}
            </Text>
            <Text mt="5" fontSize="xl">
              {li2}
            </Text>
            <Text mt="5" fontSize="xl">
              {li3}
            </Text>

            <Text
            mt="5"
            fontSize="xl"
            >
              <Link
                color="#0095E9"
                href={actionLink}
                
              >{action}
              </Link>
            </Text>
          </Box>
          <Img
            margin="3rem auto"
            src={img}
            alt="Counselorbot picture"
            maxW={{
              lg: '50%',
              md: '30%'
            }}
          />
        </Flex>
        </Fade>

      </Box>
      </Container>
    </Box>

  )
}
