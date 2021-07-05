import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const links = [
  {
    title: 'GET INVOLVED',
    links: [
      {
        label: 'Student Application',
        href: '#',
      },
      {
        label: 'Sponsor',
        href: '#',
      },
      {
        label: 'Mentor',
        href: '#',
        // badge: (
        //   <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
        //     New
        //   </Badge>
        // ),
      },
    ],
  },
  {
    title: 'Courses',
    links: [
      {
        label: 'Serverless',
        href: '#',
      },
      {
        label: 'DevOps School',
        href: '#',
      },
      {
        label: 'Data Science',
        href: '#',
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

