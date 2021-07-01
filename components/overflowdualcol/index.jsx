import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  Center,
  Container,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiPlay } from 'react-icons/hi'
export const OverflowDualCol = ({ image, headerText, action, actionLink }) => {
  return (

    <Box as="section" bg="#1D1E2B" pt="24" pb="12" overflow="hidden" color="white">
      <Container
      maxW="container.lg"
      p="15px"
    >
      <Box
        // maxW={{
        //   base: 'xl',
        //   md: '7xl',
        // }}
        // px={{
        //   base: '6',
        //   md: '8',
        // }}
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
            maxH="50vh"
            objectFit="scale-down"
            src={image}
            alt="Screening talent"
          />

          
          <Box
            // pos="relative"
            w={{
              base: 'full',
              lg: '560px',
            }}
            h={{
              base: 'auto',
              lg: '560px',
            }}

            display="flex" alignItems="center"
          >


            <Box
              flex="1"
              maxW={{
                lg: '520px',
              }}
            >



              <Heading mt="4" as="h2" size="xl" mt="8" fontWeight="extrabold" lineHeight="3rem">
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
