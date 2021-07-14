import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Img,
  Link,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { SocialLink } from './SocialLink'
import { links, socialLinks } from './_data'
import { LinkGroup } from './LinkGroup'
import { SubscribeForm } from './SubscribeForm'
import Fade from 'react-reveal/Fade';
import Image from 'next/image'
import { motion } from "framer-motion"

export const Footer = () => {
  return (
    <Box as="footer" color="#9e9d9d" bg="#181818" color="red">
      <Fade>
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
          py={{
            base: '12',
            md: '20',
          }}
        >
          <Flex
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-between"
            mb={{
              base: '10',
              lg: '16',
            }}
            align="flex-start"
            id="top"
          >
            <SimpleGrid
              flex="1"
              w={{
                base: 'full',
                lg: 'auto',
              }}
              maxW={{
                lg: '2xl',
              }}
              columns={{
                base: 1,
                md: 2,
                lg: 3,
              }}
              spacing={{
                base: '12',
                md: '39',
              }}
              fontSize="sm"
              marginEnd={{
                md: '4',
                lg: '16',
              }}
            >
              {links.map((group, idx) => (
                <LinkGroup key={idx} data={group} />
              ))}
            </SimpleGrid>
            <Box
              flex="2"
              maxW={{
                lg: '420px',
              }}
              ml={{
                lg: 'auto',
              }}
              mt={{
                base: '12',
                lg: 0,
              }}
            >
              <Text
                casing="uppercase"
                mb={{
                  base: 6,
                  lg: 10,
                }}
                fontWeight="bold"
                letterSpacing="wide"
                color="white"
                fontSize="xl"
              >
                Subscribe to our newsletter!
          </Text>
              <Text mb="3" lineHeight="tall" fontSize="xl" color="#9e9d9d">
                Stay up to date with all of our resources and opportunities. We promise we won&apos;t spam!
          </Text>
              <SubscribeForm />
            </Box>
          </Flex>

          <Flex
            direction={{
              base: 'column-reverse',
              lg: 'row',
            }}
            align={{
              base: 'flex-start',
              lg: 'center',
            }}
            justify="space-between"
            fontSize="sm"
          >
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing={{
                base: '4',
                md: '12',
              }}
              mt={{
                base: '8',
                lg: 0,
              }}
              w={{
                base: 'full',
                lg: 'auto',
              }}
              justify={{
                base: 'space-between',
                lg: 'flex-start',
              }}
              align={{
                base: 'flex-start',
                md: 'center',
              }}
            >
              <motion.a whileHover={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 270, 270, 0],
              }} href="/" w="4rem" mr="-2rem">
                <Image
                  src="/logo.png"
                  height={43.51}
                  width={48}
                />
              </motion.a>
              <HStack
                spacing="2"
                mt={{
                  lg: '4',
                }}
                as="ul"
                listStyleType="none"
              >
                {socialLinks.map((link, idx) => (
                  <motion.a as="li" key={idx} whileHover={{ scale: 1.2 }}>
                    <SocialLink href={link.href} color="white" _hover={{
                      color: "#9e9d9d",
                    }} fontSize="2rem">
                      <Box srOnly>{link.label}</Box>
                      {link.icon}
                    </SocialLink>
                  </motion.a>
                ))}
              </HStack>
            </Stack>
          </Flex>
        </Box>
      </Fade>
    </Box>
  )
}
