import Head from 'next/head'
import { GraphicTabBottom } from '../components/graphictab/bottom'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { Textblock } from '@/components/textblock'
import { ServerlessCompare } from '@/components/ServerlessCompare'
import { TextWithPic } from '@/components/dualcol/TextWithPic'
import { List, ListItem, Container, Button, Box, Text, Heading, ListIcon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
export default function Mentor() {
  let items = [
    "Expand your network by connecting with likeminded individuals",
    "Learn from students and other mentors with different perspectives",
    "Develop your communication and leadership skills",
    "Gain confidence in your technical and interpersonal skillset",
    "Get a sense of satisfaction and fulfillment by directly helping aspiring engineers"
  ]
  return (
    <div>
      <Head>
        <title>Mentor</title>
        <meta name="description" content="We pair awesome engineers with students to give back to their communities." />
        <meta property="og:title" content="Mentor - Bit Project" />
        <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" />
        <meta property="og:description" content="We pair awesome engineers with students to give back to their communities." />
        <meta property="og:url" content="https://www.bitproject.org/mentor" />
        <meta property="og:site_name" content="bitproject.org" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <GraphicTabBottom
        heading="Make a Difference. Mentor."
        desc="We’re building a community of mentors who are passionate about sharing knowledge, experience, and guidance with the next generation of engineers. Choose between a Global Student Community (GSC) mentor and a individual mentor!"
        cta1="Apply Now"
        // logoImage="/counselor.png"
        cta1link='https://jkfr7wbzytt.typeform.com/camp-mentor'

        pic1="/mentor/anthony.jpeg"
        name1="Anthony Chu"
        title1="Microsoft"
        graphic1="https://vimeo.com/570829328"

        pic2="/mentor/nica.jpeg"
        name2="Nočnica Fee"
        title2="New Relic"
        graphic2="https://vimeo.com/572023206"

        pic3="/mentor/john.jpeg"
        name3="John Kilmister"
        title3="PureGym"
        graphic3="https://vimeo.com/570824340"
      />

      <Textblock
        title="What Do Serverless Mentors Do?"
        para1="With our Serverless camp, you'll be able to contribute to our fully open-source curriculum, build interactive and value-driven educational experiences for the Global Student Community (GSC), and create a new model for non-traditional education in tech."
        para2="As a mentor, you'll be able host tech talks and workshops during our Serverless camp, meet with the Bit Project team before, during, and after the camp for feedback, and help us build a community of mentors who are passionate about sharing knowledge, experience, and guidance with the next generation of engineers."
      />

      <ServerlessCompare
        title1='Global Student Community Track'
        items1={['Engage in technical and/or interest-based conversations [on Discord] in communication channels', 'Lead a weekly AMA/discussion on curriculum-based topic links to resources for students to learn more (text based)', 'Contribute to answering curriculum-based questions on the Forum.']}

        title2='Individual Track'
        items2={['Meet with assigned student 1:1 at least once a week to discuss the following points:', 'Weeks 1-4: discuss weekly lesson topics, answer conceptual questions, provide context on how topics are used in industry (”real world” applications)', 'Weeks 5-8: guide student in their final project, help with planning, design, debugging, etc.', 'Throughout: career advice, interview prep, anything else you want!', 'Actively check communication channel to schedule meetings with student and provide async help.']}
      />

      <TextWithPic
        title='Requirements'
        items1={['Knowledge of tech industry & familiarity with:', 'Serverless technology, especially Azure Portal and VS Code Azure extension', 'Azure use cases (e.g., Function Apps, Logic Apps, etc.)', 'Basic web dev (frontend and backend)', 'Experience with NodeJS, HTML/CSS, NoSQL', 'Working with APIs & reading documentation', 'Willing to commit 1-3 hours per week during program', 'Commit to completing course (assignments not required, but mentors must at least look through curriculum & solutions) before course start date', 'Excitement about tech and eagerness to help future engineers!']}
        pic='/livecode.png'
      />

      <Box bg='black' color='white'>
        <Container maxW='container.lg' p={15}>

          <Box textAlign='center'>
            <Heading>
              Still not convinced? As a mentor you will:
            </Heading>
            <List spacing={3} fontSize='lg' color='gray.300' pt={8} textAlign='center' justifyContent='center'>
              {
                items.map((item, index) => (
                  <ListItem key={index} textAlign='center' mx='auto'>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    <Text textAlign='center' d='inline' >
                      {item}
                    </Text>
                  </ListItem>
                ))
              }
            </List>


            <Button
              my={15}
              as="a"
              href='https://jkfr7wbzytt.typeform.com/camp-mentor'
              target="_blank"
              size="lg"
              color="white"
              border="1px solid #2B6CB0"
              bg="#2B6CB0"
              px="8"
              fontWeight="bold"
              fontSize="md"
              _hover={{
                color: "white",
                background: "#4e8dcf",
              }}
            >
              Apply to Mentor!
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </div >
  )
}
