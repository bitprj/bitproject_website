import {
  Box,
  Center,
  HStack,
  Stack,
  StackDivider,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { NavLink } from './NavLink'
import { NavList } from './NavList'
import { NavListItem } from './NavListItem'
const links = [
  {
    label: 'Serverless',
    href: '/serverless',
  },
  {
    label: 'Workshops',
    href: '/technicalworkshops',
  },
  {
    label: 'Mentor',
    href: '/mentor',
  },
  {
    label: 'Sponsor',
    href: '/sponsor',
  },
]

const MobileNavContent = (props) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box {...props}>
      <Center
        as="button"
        p="2"
        fontSize="2xl"
        onClick={onToggle}
        color="white"
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="black"
        top="64px"
        animate={isOpen ? 'enter' : 'exit'}
      >
        <Stack spacing="0" divider={<StackDivider borderColor="black" />}>
          {links.map((link, index) => (
            <NavListItem key={index} >
              <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem
            style={{
              flex: '1',
            }}
          >
          </NavListItem>
        </Stack>
      </NavList>
    </Box>
  )
}

const DesktopNavContent = (props) => {
  return (
    <HStack spacing="8" align="stretch" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop key={index} href={link.href} fontSize="xl" fontWeight="bold" _hover={{
          color: "grey",
        }}>
              {link.label}
        </NavLink.Desktop>
      ))}
    </HStack>
  )
}

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
}
