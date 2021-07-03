import {
  Box,
  Center,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  Square,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import { useEffect, useState } from "react";
import * as React from 'react'

export const Card = ({ name, quote, image }) => {

  return (

    <Box borderRadius="lg" mx="3" mt="5" bg="#404040" borderRadius="20px">

      <Box p="6">
        <Box alignItems="baseline">

          {image &&

            <Img
              src={image}
              // maxW="70rem"
              h="40px"
              borderRadius="15px"
            />}
          <Text fontSize="sm" color="grey" mx="auto" mt="2" fontWeight="bold">
            {`${name}, 11th Grade`}
          </Text>
        </Box>

        <Text fontSize="sm" color="white" mx="auto" mt="2" fontWeight="">
          {quote}
        </Text>




      </Box>
    </Box>

  )
}
