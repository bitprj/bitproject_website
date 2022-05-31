import Head from "next/head";
import { GraphicTabBottom } from "../components/graphictab/bottom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { TextWithPic } from "@/components/dualcol/TextWithPic";
import {
  List,
  Link,
  ListItem,
  Container,
  Button,
  Box,
  Text,
  SimpleGrid,
  Heading,
  Img,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { TeamCard } from "@/components/TeamCard";
import Fade from "react-reveal/Fade";

export default function Mentor() {
  let items = [
    "Expand your network and connect with like-minded individuals",
    "Learn from students and other mentors with different perspectives",
    "Develop your communication and leadership skills",
    "Gain confidence in your technical and interpersonal skill set",
    "Get a sense of satisfaction and fulfillment by directly helping aspiring engineers",
  ];

  const mentors = [
    {
      name: "Christian Lechner",
      title: "Development Architect",
      company: "SAP SE",
      img: "/pic-christian.jpeg",
      twitter: "https://twitter.com/lechnerc77",
      linkedin: "https://www.linkedin.com/in/christian-lechner-963b7017/",
    },

    {
      name: "John Kilmister",
      title: "Software Architect",
      company: "NICE Ltd",
      img: "/pic-john.jpeg",
      twitter: "https://twitter.com/johnkilmister",
      linkedin: "https://www.linkedin.com/in/johnkilmister/",
    },

    {
      name: "Johan Eriksson",
      title: "Solutions Architect",
      company: "CDON AB",
      img: "/pic-johan.jpeg",
      twitter: "https://twitter.com/jedjohan",
      linkedin: "https://www.linkedin.com/in/jedjohaneriksson/",
    },

    {
      name: "Adham Bishr",
      title: "Senior Software Engineer",
      company: "Jeeves",
      img: "/pic-adham.jpeg",
      linkedin: "https://www.linkedin.com/in/abishr12/",
    },

    {
      name: "Tejas Kumthekar",
      title: "Software Engineer",
      company: "Courier",
      img: "/pic-tejas.jpeg",
      linkedin: "https://www.linkedin.com/in/tejaskumthekar/",
    },
  ];
  return (
    <div>
      <Head>
        <title>Mentor</title>
        <meta
          name="description"
          content="We pair awesome engineers with students to give back to their communities."
        />
        <meta property="og:title" content="Mentor - Bit Project" />
        <meta
          property="og:image"
          content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75"
        />
        <meta
          property="og:description"
          content="We pair awesome engineers with students to give back to their communities."
        />
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
        cta1link="https://jkfr7wbzytt.typeform.com/camp-mentor"
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
        mutedText="*Currently seeking additional GSC mentors; limited spots remaining for individual track"
      />

      <Container maxW="container.lg" p="15px" bg="black">
        <Box
          maxW={{
            base: "xl",
            md: "7xl",
          }}
          mx="auto"
          bg="black"
          color="white"
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="extrabold"
            maxW="48rem"
            lineHeight="1.2"
            letterSpacing="tight"
          >
            What Do Serverless Mentors Do?
          </Heading>
          <Box my="1rem">
            <Text fontSize="lg" mr="3rem">
              As a mentor, you will be able to directly help students build
              their technical and engineering skills. You will also have the
              opportunity to host technical talks and workshops, give valuable
              feedback to the Bit Project team, and help us build a community of
              mentors who are passionate about sharing knowledge, experience,
              and guidance with the next generation of engineers.
            </Text>
            <br />
            <Text fontSize="lg" mr="3rem">
              We also welcome and encourage mentors to contribute to our{" "}
              <Link
                href="https://github.com/bitprj/Intro-To-Serverless"
                isExternal
                color="cyan.300"
                _hover={{
                  color: "cyan.500",
                }}
              >
                fully open-source curriculum
              </Link>
              ! By doing so, you will be able to create interactive and unique
              educational experiences for our student community and aid us in
              building a new model for non-traditional tech education.
            </Text>
          </Box>
        </Box>
      </Container>

      <Box bg="black" color="white">
        <Container maxW="container.lg" p="15px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Box bg="gray.900" p={4} rounded="">
                <Heading as="h2" size="lg" fontWeight="semibold" mb="4">
                  Global Student Community Track
                </Heading>
                <List spacing={3} fontSize="lg" color="gray.300">
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Engage in technical and/or interest-based conversations [on
                    Discord] in communication channels
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Lead a weekly AMA/discussion on curriculum-based topic links
                    to resources for students to learn more (text based)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Contribute to answering curriculum-based questions on the
                    Forum
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box>
              <Box bg="gray.900" p={4} rounded="">
                <Heading as="h2" size="lg" fontWeight="semibold" mb="4">
                  Individual Track{" "}
                </Heading>
                <List spacing={3} fontSize="lg" color="gray.300">
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Meet with assigned student 1:1 at least once a week to
                    discuss the following points:
                  </ListItem>
                  <List spacing={3} fontSize="lg" color="gray.300" ml={4}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Weeks 1-4: discuss weekly lesson topics, answer conceptual
                      questions, provide context on how topics are used in
                      industry (”real world” applications)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Weeks 5-8: guide student in their final project, help with
                      planning, design, debugging, etc.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Throughout: career advice, interview prep, anything else
                      you want!
                    </ListItem>
                  </List>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Actively check communication channel to schedule meetings
                    with student and provide async help
                  </ListItem>
                </List>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <TextWithPic
        title="Requirements"
        items1={[
          "Knowledge of tech industry & familiarity with:",
          "Serverless technology, especially Azure Portal and VS Code Azure extension",
          "Azure use cases (e.g., Function Apps, Logic Apps, etc.)",
          "Basic web dev (frontend and backend)",
          "Experience with NodeJS, HTML/CSS, NoSQL",
          "Working with APIs & reading documentation",
          "Willing to commit 1-3 hours per week during program",
          "Commit to completing course (assignments not required, but mentors must at least look through curriculum & solutions) before course start date",
          "Excitement about tech and eagerness to help future engineers!",
        ]}
        pic="/livecode.png"
      />

      <Box bg="black" color="white">
        <Container maxW="container.lg" p={15}>
          <Box textAlign="center">
            <Heading>Still not convinced? As a mentor you will:</Heading>
            <List
              spacing={3}
              fontSize="lg"
              color="gray.300"
              pt={4}
              textAlign="center"
              justifyContent="center"
            >
              {items.map((item, index) => (
                <ListItem key={index} textAlign="center" mx="auto">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <Text textAlign="center" d="inline">
                    {item}
                  </Text>
                </ListItem>
              ))}
            </List>

            <Button
              my={15}
              as="a"
              href="https://jkfr7wbzytt.typeform.com/camp-mentor"
              target="_blank"
              size="lg"
              color="white"
              border="1px solid #2B6CB0"
              bg="#2B6CB0"
              px="8"
              rounded="0"
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

          <Box bg="black" color="white" mx="auto" mt={16}>
            <Fade>
              <Box
                maxW={{
                  base: "xl",
                  md: "7xl",
                }}
              >
                <Heading
                  as="h1"
                  size="xl"
                  fontWeight="extrabold"
                  lineHeight="1.2"
                  letterSpacing="tight"
                  textAlign="center"
                >
                  Meet our Serverless Mentors!
                </Heading>

                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  mt={8}
                  spacing={12}
                >
                  {mentors.map((item, index) => {
                    return (
                      <TeamCard
                        key={index}
                        name={item.name}
                        title={item.title}
                        img={item.img}
                        company={item.company}
                        twitter={item.twitter}
                        linkedin={item.linkedin}
                      />
                    );
                  })}
                </SimpleGrid>
              </Box>
            </Fade>
          </Box>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}
