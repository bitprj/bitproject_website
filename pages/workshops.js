import React, { useState } from 'react'
import { Landing } from '../components/landing.jsx'
import { Carousel } from '../components/carousel'
import { Navbar } from '../components/navbar'
import { DualBox } from '../components/dualcol/dualbox'
import { Footer } from '../components/footer'
import { HighlightBox } from '../components/dualcol/_box'
import { getAllFilesFrontMatter } from '../lib/mdx'
import {
  SimpleGrid,
  Container,
  Box,
  Grid,
  Link,
  GridItem
} from '@chakra-ui/react'
import BlogLayout from '../layouts/blog'

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
    <div>
      <Navbar />
      <Landing
        heading="Technical Workshops"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 100% Free and Open Source"
        cta1="Apply Now"
        cta2="Learn More"
        logoImage="/tv.png"
        image="/workshop.gif"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />

      <Box as="section" bg="black" color="white">
            <Container
              maxW="container.xl"
            >
      <SimpleGrid minChildWidth="350px" spacing="40px" bg="black" justify="center" >
        {filteredBlogPosts.map((frontMatter) => (
            <HighlightBox key={frontMatter.title} title={frontMatter.title} companyLogo={frontMatter.companyLogo} image={frontMatter.image} link={`workshops/${frontMatter.slug}`} mx="auto"/>
        ))}
      </SimpleGrid>
      </Container>
      </Box>

      <Footer />

    </div>
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
  return { props: {posts} }
}
