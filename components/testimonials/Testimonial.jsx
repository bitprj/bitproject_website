import { Box, Flex, HStack, Img, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { SimpleGrid } from "@chakra-ui/react"
import Image from "next/image";

export const Testimonial = (props) => {
  const { image, company, name, children, ...rest } = props
  return (
    <Stack
      spacing={6}
      mb="4"
      bg="#242424"
      h="100%"
      shadow="sm"
      _hover={{ bg: "#404040" }}
      p={{
        base: '8',
        md: '8',
      }}

      color="white"
      {...rest}
    >
      <style jsx global>
        {`
                    .profileImage { 
                        border-radius: 50%;
                        object-fit: cover;
                    }
                    
                `}
      </style>
      <HStack
        spacing={{
          base: 3,
          md: 5,
        }}
      >
        <Image src={image} className="profileImage" border="2px solid red" height="60px" width="60px" alt={image} />
        <Flex direction="column">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" fontWeight="medium" opacity={0.7}>
            {company}
          </Text>
        </Flex>

      </HStack>
      <Box
        fontSize={{
          base: 'md',
          md: 'lg',
        }}
        flex="1"
      >
        {children}
      </Box>

    </Stack>
  )
}
