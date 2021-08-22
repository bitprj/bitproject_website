import { Box, Grid, Heading, Link, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './Rating'
import { Testimonial } from './Testimonial'
import Quotes from './quotes.json'
import { Stack } from "@chakra-ui/react"
export const Testimonials = ({ heading, desc }) => {
  return (
    <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
      <Heading
        as="h1"
        size="xl"
        fontWeight="extrabold"
        maxW="32rem"
        mx="auto"
        textAlign="center"
        lineHeight="1.2"
        letterSpacing="tight"
      >
        {heading}
      </Heading>

      <Text fontSize="lg" mt="4" mx="auto" textAlign="center">
        {desc}
      </Text>

      <Stack align="start" justify="center" spacing={{ lg: "-4", sm: "-8" }} columns="1" direction={{
        lg: "row",
        sm: "column"
      }}>
        <Box p="4" maxW={{
          lg: "50%"
        }}>
          {Quotes.map((quote, i) => {
            if (i >= 2) {
              return;
            }
            return (
              <Testimonial
                key={i}
                name={quote.name}
                company={quote.title}
                image={quote.img_url}
              >
                {quote.text}
              </Testimonial>
            )
          })}
        </Box>
        <Box p="4" maxW={{
          lg: "50%"
        }}>
          {
            Quotes.map((quote, i) => {
              if (i < 2) {
                return;
              }

              return (
                <Testimonial
                  key={i}
                  name={quote.name}
                  company={quote.title}
                  image={quote.img_url}
                >
                  {quote.text}
                </Testimonial>
              )
            })}
        </Box>

      </Stack>
    </Box >
  )
}
