import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  Center,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiPlay } from 'react-icons/hi'
export const OverflowDualCol = ({ image, headerText, action, actionLink }) => {
  return (

    <Box as="section" pt="16" pb="24" border="2px solid red" bg="black" color="white">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
        
      >
        <Stack
        
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '3rem',
            lg: '2rem',
          }}
          mt="8"
          align={{
            lg: 'center',
          }}
          justify="space-between"
        >
          <Img
            w="full"
            pos="relative"
            zIndex="1"
            maxH="50vh"
            objectFit="scale-down"
            src={image}
            alt="Screening talent"
          />

          
          <Box
            pos="relative"
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
    </Box>
  )
}
