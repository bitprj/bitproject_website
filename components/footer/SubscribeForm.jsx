import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { motion } from "framer-motion"

export const SubscribeForm = () => {

  const subscribeEmail = async event => {
    let email = document.getElementById('emailFooter').value

    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (email == "") {
      return;
    }
    else if (!emailRegex.test(email)) {
      return;
    }


    if (email == "") {
      return;
    }
    console.log(`Subscribing ${email} to newsletter...`)

    const res = await fetch(`/api/subscribe`,
      {
        body: JSON.stringify({
          email: email
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST'
      }
    )

    let result = await res.json()
    document.getElementById('formResponseFooter').innerText = "Thanks! See you soon 👋"
    document.getElementById('emailFooter').remove()
    document.getElementById('signupFooter').remove()
    console.log(result)
  }

  return (
    <Box>
      <Box
        mt="8"
        display={{
          md: 'flex',
        }}
        maxW="xl"
      >


        <FormControl id="emailFooter" isRequired>
          <Input
            roundedEnd={{
              md: '0',
            }}
            mb={{
              base: '2',
              lg: '0',
            }}
            flex="1"
            placeholder="email"
            border="1px solid"
            borderColor="grey"
            _placeholder={{ color: '#9e9d9d' }}
            color="#9e9d9d"
            _focus=""
            _hover=""
          />
        </FormControl>
          <Button 
            id="signupFooter"
            onClick={subscribeEmail}
            w={{
              base: 'full',
              md: 'auto',
            }}
            fontSize="sm"
            px="8"
            roundedStart={{
              md: '0',
            }}
            bg="grey"
            color="white"
            border="1px solid grey"
            fontWeight="bold"
            letterSpacing="wide"
            _hover={{px: "50px"}}
            _highlighted=""
          >
            SUBSCRIBE
        </Button>

      </Box>
      <Box textAlign="center" w="100%">
        <Text id="formResponseFooter" fontSize="lg">
        </Text>
      </Box>
    </Box>
  )
}