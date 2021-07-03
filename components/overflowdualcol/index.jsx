import {
  Box,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  Container,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

export const OverflowDualCol = ({ image, headerText, action, actionLink, categoryLogo }) => {
  return (

    <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
      <Container
      maxW="container.lg"
      p="15px"
    >
      <Box
        margin="0"
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '1rem',
            lg: '2rem',
          }}

          align={{
            lg: 'center',
          }}
          justify="start"
          display="flex"
        >
          <Img
            pos="relative"
            zIndex="1"
            maxH="40vh"
            objectFit="scale-down"
            src={image}
          />

          
          <Box
            w={{
              base: 'full',
              lg: '560px',
            }}
            h={{
              base: 'auto',
              lg: '560px',
            }}
            display="flex"
            alignItems="center"
          >


            <Box
              flex="1"
              maxW={{
                lg: '520px',
              }}
            >
              { categoryLogo && 

              <Img 
                src={categoryLogo}
                width="100%"
                // maxW="70rem"
                m="0 auto"
                mt="10rem"
                maxH="10rem"
              />}

              <Heading mt="4" as="h2" size="xl" fontWeight="extrabold" lineHeight="3rem">
                {headerText}
              </Heading>

              <Stack
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                spacing="4"
                mt="8"
              >
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
              </Stack>
            </Box>




          </Box>


        </Stack>
      </Box>
      </Container>
    </Box>
  )
}
