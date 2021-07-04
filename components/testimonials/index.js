import {
  Box,
  Heading,
  Text,
  useColorModeValue as mode,
  Container,
} from '@chakra-ui/react'

import * as React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'


import { Card } from './tweetcard.jsx'
import SwiperCore, { Autoplay } from 'swiper';

import Quotes from './quotes.json'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import styles from './Testimonials.module.css';

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


        <div className="mt-6" >
          <div  display="flex" alignSelf="center">
            <Swiper
              centeredSlides={true}
              speed={300}
              loop={true}
              slidesPerColumnFill="row"
              breakpoints={{
                320: {
                  slidesPerView: 1.5,
                },
                720: {
                  slidesPerView: 2.5,
                },
                920: {
                  slidesPerView: 3.2,
                },
                1024: {
                  slidesPerView: 3.2,
                },
                1208: {
                  slidesPerView: 3.2,
                },
              }}
            >
              {Quotes.map((quote, i) => {
                return (
                  <SwiperSlide key={i}
                    alignItems="center"
                    display="flex"
                    className={styles.swiperWrapper}
                    >
                    <Card 
                      name={quote.name}
                      quote={quote.text}
                      title={quote.title}
                      image={quote.img_url}
                    />
                  </SwiperSlide>
                )
              })}

            </Swiper>
          </div>
        </div>


    </Box>

  )
}