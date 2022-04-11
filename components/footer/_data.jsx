import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const links = [
  {
    title: 'USEFUL LINKS',
    links: [
      {
        label: 'Serverless',
        href: '/serverless',
      },
      {
        label: 'Workshops',
        href: '/workshops',
        // badge: (
        //   <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
        //     New
        //   </Badge>
        // ),
      },
      {
        label: 'Mentor',
        href: '/mentor',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/XYzw9HPr',
      },
    ],
  },
  

]
export const socialLinks = [
  {
    label: 'Facebook',
    icon: <FaFacebook />,
    href: 'https://www.facebook.com/bitproject.org',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/bitprojectorg',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/company/bitprojectorg',
  },
  {
    label: 'LinkedIn',
    icon: <FaTwitter />,
    href: 'https://www.twitter.com/bitprj',
  },
]

