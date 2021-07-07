import { Box, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { motion } from "framer-motion"

export const LinkGroup = (props) => {
  const { data } = props
  const { links, title } = data
  return (
    <Box>
        <Text
          textTransform="uppercase"
          mb={{
            base: '6',
            md: '10',
          }}
          fontWeight="bold"
          letterSpacing="wide"
          color="white"
          fontSize="xl"
          w="10rem"
        >
          {title}
        </Text>
      <Stack
        as="ul"
        w="10rem"
        spacing={{
          base: 2,
          md: 4,
        }}
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <motion.div as="li" key={idx} whileHover={{ scale: 1.1 }}>
            <Text
              as="a"
              href={link.href}
              fontSize="lg"
              _hover={{
                color:"#FEE761"
              }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <Box as="span">
                  {link.badge}
                </Box>
              )}
            </Text>
          </motion.div>
        ))}
      </Stack>
    </Box>
  )
}
