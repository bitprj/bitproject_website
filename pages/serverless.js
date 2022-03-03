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
import { ServerlessCompare } from '@/components/ServerlessCompare'
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
        <title>Serverless Camp Summer 2022</title>
        <meta name="description" content="Coding Bootcamp organized by the 501(c)(3) non-profit Bit Project." />
        <meta property="og:title" content="Serverless Camp Summer 2022" />
        <meta property="og:image" content="https://i.imgur.com/Rk9Fiof.png" />
        <meta property="og:description" content="Coding Bootcamp organized by the 501(c)(3) non-profit Bit Project." />
        <meta property="og:url" content="https://www.bitproject.org/serverless" />
        <meta property="og:site_name" content="bitproject.org" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <GraphicTabBottom
        heading="Serverless Camp 2022"
        bold='June 13 - Aug 31'
        desc="In our 8-week boot camp, build awesome apps with Serverless functions, JavaScript, and APIs. From IoT heartbeat monitors to face mask detectors, you can build anything with Serverless!"
        cta1="Apply Now"
        cta2="Join as a Mentor"
        logoImage="/serverlessLogo.svg"
        cta1link={'https://jkfr7wbzytt.typeform.com/serverless-camp'}
        cta2link={'https://jkfr7wbzytt.typeform.com/camp-mentor'}

        pic1="/ganning-profile.jpg"
        name1="CounselorBot"
        title1="Ganning Xu"
        graphic1="https://www.youtube.com/watch?v=Xn-tfkn5Gr0" // we need to change fifi's

        pic2="https://i.imgur.com/026vZiA.png"
        name2="Vehicle Telemetry"
        title2="Jakub Manda"
        graphic2="https://www.youtube.com/watch?v=jmsb95tgBRk"


        pic3="https://i.imgur.com/XRh3uQb.jpg"
        name3="QnA Bot"
        title3="David Tetreau"
        graphic3="https://www.youtube.com/watch?v=FU1pzbgG3nA"
      />

      <Textblock
        title="What is Serverless Camp?"
        para1="Serverless involves harnessing the power of cloud computing and building large applications quickly without having to manage servers."
        para2="The Serverless Camp is an 8-week interactive coding bootcamp designed to help you gain real-world technical skills through project-based learning and build awesome professional connections. We will be offering two programs this summer: the Mentorship Program and the Global Student Community"
      />

      <ServerlessCompare
        title1='Mentorship Program'
        items1={['Learn to build with serverless from seasoned software engineers', 'Get direct access to coding workshops and tech talks', 'Develop resume-worthy projects using the actual tools of the industry', 'Receive 1:1 mentorship from seasoned software engineers from the industry to learn about cutting edge technology', 'Present a talk at the Serverless Days: Student Edition Conference*']}
        astrick1='*Limited seats available'

        title2='Global Student Community'
        items2={['Learn to build with serverless from seasoned software engineers', 'Get direct access to coding workshops and tech talks', 'Develop resume-worthy projects using the actual tools of the industry', 'Compete in a global serverless hackathon to win prizes and present at the annual Serverless Days: Student Edition Conference']}

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
        image="/feature.svg"
        logoImage="/serverlessLogo.svg"
      />
      <Box as="section" bg="black" color="white">
        <Container
          maxW="container.xl"
        // p="30px"
        >
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px" bg="black" justify="center">
            {filteredBlogPosts.map((frontMatter) => (
              <HighlightBox key={frontMatter.title} title={frontMatter.title} companyLogo={frontMatter.companyLogo} image={frontMatter.image} cohort={frontMatter.cohort} link={`projects/${frontMatter.slug}`} mx="auto" />
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
