import { Box, Flex, HStack, Img, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import Image from "next/image";

export const Testimonial = (props) => {
  const { image, company, name, children, ...rest } = props
  return (
    <Stack
      spacing={6}
      h="100%"
      rounded="2xl"
      shadow="sm"
      py={{
        base: '6',
        md: '12',
      }}
      px={{
        base: '6',
        md: '14',
      }}
      bg={mode('white', 'gray.900')}
      color={mode('gray.800', 'gray.300')}
      {...rest}
    >

      <style jsx global>
        {`
                    .profileIcon { 
                      border-radius: 50%;
                      object-fit: cover;
                    }
                    
                `}
      </style>

      <Box
        fontSize={{
          base: 'md',
          md: 'lg',
        }}
        flex="1"
      >
        {children}
      </Box>
      <HStack
        spacing={{
          base: 3,
          md: 5,
        }}
      >
        <Image alt={image} height="50px" width="50px" src={image} className="profileIcon" />
        <Flex direction="column">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" fontWeight="medium" opacity={0.7}>
            {company}
          </Text>
        </Flex>
      </HStack>
    </Stack>
  )
}
