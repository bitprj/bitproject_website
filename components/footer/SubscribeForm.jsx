import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

export const SubscribeForm = () => {

  const subscribeEmail = async event => {
    let email = document.getElementById('emailFooter').value
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
    <form
      onSubmit={(e) => {
        e.preventDefault() // add submit logic
      }}
    >
      <Box
        mt="8"
        display={{
          md: 'flex',
        }}
        maxW="xl"
      >
        <Box textAlign="center" >
          <Text id="formResponseFooter" fontSize="lg" mt="4">
          </Text>
        </Box>

        <FormControl  isRequired>
          <Input
            id="emailFooter"
            roundedEnd={{
              md: '0',
            }}
            mb={{
              base: '2',
              lg: '0',
            }}
            flex="1"
            bg="{mode('white', 'gray.900')}"
            placeholder="email"
            color="grey"
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
          bg="#03A1EE"
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="wide"
        >
          Subscribe
      </Button>

      </Box>
    </form>
  )
}