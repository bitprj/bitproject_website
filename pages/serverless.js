import Head from 'next/head'
import React, { useState } from 'react'
import { Textblock } from '../components/textblock'
import { DualCol } from '../components/dualcol'
import { CenterDualCol } from '../components/dualcol/center'
import { Navbar } from '../components/navbar'
import { GraphicTabBottom } from '../components/graphictab/bottom'
import { Footer } from '../components/footer'
import { HighlightBox } from '../components/dualcol/_box'
import { getAllFilesFrontMatter } from '../lib/mdx'
import {
  SimpleGrid,
  Container,
  Box,
} from '@chakra-ui/react'
import BlogLayout from '../layouts/blog'

export default function Serverless({ posts }) {

  const [searchValue] = useState('')
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
      <Head>
                <title>Serverless</title>
                <meta name="description" content="In our 8-week boot camp, build awesome apps with Serverless functions, JavaScript, and APIs. From IoT heartbeat monitors to face mask detectors, you can build anything with Serverless!" />
                <meta property="og:title" content="Serverless - Bit Project" />
                <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" /> 
                <meta property="og:description" content="Build awesome apps with Serverless functions, JavaScript, and APIs." />
                <meta property="og:url" content="https://www.bitproject.org/serverless" />
                <meta property="og:site_name" content="bitproject.org" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
      <Navbar />
      <GraphicTabBottom
        heading="Serverless Camp"
        desc="In our 8-week boot camp, build awesome apps with Serverless functions, JavaScript, and APIs. From IoT heartbeat monitors to face mask detectors, you can build anything with Serverless!"
        cta1="Apply Now"
        cta2="Learn More"
        logoImage="/serverlessLogo.svg"
        cta1link={'https://airtable.com/shrdXQvSljJYIpbHy'}
        cta2link={'https://www.notion.so/Serverless-Camp-adfa3d82f8f540039035b4259a6c4430'}

        pic1="/fifi.jpeg"
        name1="Saving $ on Amazon"
        title1="Fifi Teklemedhin"
        graphic1="https://vimeo.com/570820559" // we need to change fifi's

        pic2="/emily.png"
        name2="File Sharing for Exams"
        title2="Emily Chen"
        graphic2="https://vimeo.com/572255574"


        pic3="/anita.jpeg"
        name3="Dine the Distance"
        title3="Anita Padman"
        graphic3="https://vimeo.com/572033757"
      />

      <Textblock
        title="What is Serverless Camp?"
        para1="Serverless involves harnessing the power of cloud computing and building large applications quickly without having to manage servers."
        para2="Camp is an 8-week interactive coding bootcamp designed to help you gain real-world technical skills through project-based learning and build awesome professional connections."
      />
      <DualCol
        preheading="week 1"
        heading="Git & Serverless Basics"
        para1="Set up your development environment with developer tools like Github and Postman."
        para2="Build projects to get started with Azure Functions, Cloud Engineering, and Javascript!"
        li1="⚡ HackerVoice API"
        li2="🐱 twoCatz API"
        li3="🐸 [TOP SECRET] API"
        img="/week1.gif"
      />
      <DualCol
        preheading="week 2"
        heading="Working with APIs"
        para1="Learn how to read documentation, experiment, and most importantly Google."
        para2="Build projects with awesome APIs from Twilio, Microsoft Cognitive Services, and Giphy!"
        li1="😊 Emotional Gifs"
        li2="🎶 Song4u.js"
        img="/week2.gif"
      />
      <DualCol
        preheading="week 3"
        heading="Storing & Retrieving Data"
        para1="Learn how to interact with databases add exciting and functional features to your projects."
        para2="Build projects with Blob Storage and a NoSQL database to store data received through your serverless function!"
        li1="🐰 Bunnimage API"
        li2="🤫 Deep Secrets API"
        img="/week3.gif"
      />
      <DualCol
        preheading="week 4"
        heading="Building a Frontend"
        para1="Learn how to build a webpage to accept, display, and retrieve user input."
        para2="Build a frontend with HTML/CSS/JS to interact with your serverless functions!"
        li1="🐇 Bunnimage: The App"
        li2="🐈 twoCatz: The App"
        img="/week4.gif"
      />
      <CenterDualCol
        heading="Build your Own Project"
        description="Demonstrate your new competence with cloud computing by developing your own project: it can solve problems, be fun, or do all of the above!"
        cta1="Sample Projects"
        cta2="Learn More"
        image="/feature.svg"
        logoImage="/serverlessLogo.svg"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
      />
      <Box as="section" bg="black" color="white">
        <Container
          maxW="container.xl"
          p="30px"
        >
          <SimpleGrid minChildWidth="350px" spacing="40px" bg="black" justify="center" >
            {filteredBlogPosts.map((frontMatter) => (
              <HighlightBox key={frontMatter.title} title={frontMatter.title} companyLogo={frontMatter.companyLogo} image={frontMatter.image} link={`projects/${frontMatter.slug}`} mx="auto" />
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
  const posts = await getAllFilesFrontMatter('projects')
  return { props: { posts } }
}
