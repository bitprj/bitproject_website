import {
  Box,
  Text,
  useColorModeValue as mode,
  SimpleGrid,
  Container,
  Link
} from '@chakra-ui/react'

import * as React from 'react'
import { HighlightBox } from '../dualcol/_box'

export const Carousel = ({ title1, link1, companyLogo1, img1, title2, link2, companyLogo2, img2, title3, link3, companyLogo3, img3 }) => {
  
  return (
    <Box as="section" bg="black" color="white">
      <Container
        maxW="container.lg"
        p="15px"
      >
        <SimpleGrid minChildWidth="200px" spacing="20px" bg="black">
          <Link href={link1} _hover="none">
            <HighlightBox 
              title={title1}
              companyLogo = {companyLogo1}
              image = {img1}
            />
          </Link>

            <Link href={link2} _hover="none">
            <HighlightBox 
              title={title2}
              companyLogo = {companyLogo2}
              image = {img2}
            />
            </Link>

            <Link href={link3} _hover="none">
            <HighlightBox 
              title={title3}
              companyLogo = {companyLogo3}
              image = {img3}
            />
            </Link>
          </SimpleGrid>
      </Container>
    </Box>

  )
}