import {
  Box,
  Heading,
  Img,
  Text,
  useColorModeValue as mode,
  Container,
} from '@chakra-ui/react'

import * as React from 'react'
import { useRouter } from 'next/router'

import { Swiper, SwiperSlide } from 'swiper/react'


import { Card } from './tweetcard.jsx'
import SwiperCore, { Autoplay } from 'swiper';

import Examples from './tweets.json'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import Link from 'next/link'

export const Testimonials = ({ heading, desc }) => {

  SwiperCore.use([Autoplay])

  return (
    <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
      <Container
        maxW="container.lg"
        p="15px"
      >
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

        <Text fontSize="xl" mt="4" mx="auto" textAlign="center">
          {desc}
        </Text>

        <div className="mt-6">
          <div className={'lg:-mr-32 lg:-ml-32'}>
            <Swiper

              initialSlide={3}
              spaceBetween={0}
              slidesPerView={4}
              speed={300}
              loop={true}
              autoplay={{ delay: 1000 }}


              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                720: {
                  slidesPerView: 2,
                },
                920: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1208: {
                  slidesPerView: 5,
                },
              }}
            >
              {Examples.map((tweet, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      name={tweet.handle}
                      quote={tweet.text}
                      image="https://i.pinimg.com/474x/dc/e6/c0/dce6c0923a316554572841bb6f857c31.jpg"
                    />
                  </SwiperSlide>
                )
              })}

            </Swiper>
          </div>
        </div>

      </Container>
    </Box>

  )
}