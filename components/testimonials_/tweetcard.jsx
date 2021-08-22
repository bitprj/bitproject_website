import {
  Box,
  Img,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

import { ProfileIcon } from '../profileicon'
export const Card = ({ name, quote, title, image }) => {

  return (

    <Box mx="6" mt="5" border="1px solid #7F7F7F" borderRadius="20px">

      <Box p="6">
        <Text fontSize="md" color="gray.200" mx="auto" mt="2" fontWeight="bold" mb="1rem">
          {quote}
        </Text>
        <Box alignItems="baseline">
          <ProfileIcon
            pic={image}
            name={name}
            title={title}
          />
        </Box>
      </Box>
    </Box>

  )
}
