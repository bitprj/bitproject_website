import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  Link,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import * as Logos from './Brands'
export const DualCol  = ( {preheading, heading, para1, para2, li1, li2, li3, img, action, actionLink} ) => {
  return (
    <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
      <Container
      maxW="container.lg"
    >
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        
      >
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
             <Text mt="5" fontSize="xl" color="#86D3FF">
              {preheading}
            </Text>

            <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
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
                color="#86D3FF"
                href={actionLink}
                
              >{action}
              </Link>
            </Text>
          </Box>
          <Box
            boxSize={{
              base: '20',
              lg: '8',
            }}
          />
          <Img
            marginEnd="-16rem"
            w="50rem"
            src={img}
            alt="Counselorbot picture"
          />
        </Flex>
        
      </Box>
      </Container>
    </Box>
  )
}
