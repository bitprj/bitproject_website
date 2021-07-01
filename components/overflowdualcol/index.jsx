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

    <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white" border="2px solid blue">
      <Container
      maxW="container.lg"
      p="15px"
      border="3px solid yellow"
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
        border="2px solid red"
        display="flex"
        alignContent="center"
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
          mt="8"
          align={{
            lg: 'center',
          }}
          // justify="start"
          border="2px solid green"
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



              <Heading mt="4" fontSize="" fontWeight="medium" >
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
