// import Head from 'next/head'
import React, { useState } from 'react'
import { Landing } from '../components/landing.jsx'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { HighlightBox } from '../components/dualcol/_box'
import { getAllFilesFrontMatter } from '../lib/mdx'
import {
  SimpleGrid,
  Container,
  Box,
} from '@chakra-ui/react'
import BlogLayout from '../layouts/blog'
import { NextSeo } from 'next-seo'

const title = "Workshops"
const description = "We make fun, interactive workshops to give students hands-on experience with cutting edge tools."
const url = "https://www.bitproject.org/workshops"


export default function Workshops({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <>
      <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url,
            title,
            description,
            images: [
              {
                url: 'https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75',
                alt: 'Bit Project Live Coding',
                type: 'image/png',
              },
            ],
          }}
        />
      <Navbar />
      <Landing
        heading="Technical Workshops"
        description="We make fun, interactive workshops to give students hands-on experience with cutting edge tools."
        logoImage="/tv.png"
        image="/workshop.gif"
        formActionButton="Get Notified"
        formResponse="See you soon ❤️"
        formDesc="Get notified about future workshops below!"
      />

      <Box as="section" bg="black" color="white">
        <Container
          maxW="container.xl"
          p="30px"
        >
          <SimpleGrid minChildWidth="350px" spacing="40px" bg="black" justify="center" >
            {filteredBlogPosts.map((frontMatter) => (
              <HighlightBox key={frontMatter.title} title={frontMatter.title} companyLogo={frontMatter.companyLogo} image={frontMatter.image} link={`workshops/${frontMatter.slug}`} mx="auto" />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />

    </>
  )
}


export function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  })

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('workshops')
  return { props: { posts } }
}
