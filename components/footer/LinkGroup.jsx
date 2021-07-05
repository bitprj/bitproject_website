import { Box, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'

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
          color="#585858"
          fontSize="xl"
          // border="2px solid yellow"
          w="20rem"
        >
          {title}
        </Text>
      <Stack
        as="ul"
        w="20rem"
        spacing={{
          base: 2,
          md: 4,
        }}
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box as="li" key={idx}>
            <Text
              as="a"
              href={link.href}
              fontSize="lg"
              _hover={{
                textDecoration: 'underline',
              }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <Box as="span">
                  {link.badge}
                </Box>
              )}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
