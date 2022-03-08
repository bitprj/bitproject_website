import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { Box, Img, Heading, Text, Container, Button } from '@chakra-ui/react'
import { DualCol } from '../components/dualcol'

export default function BitQuest() {
    return (
        <div>
            <Head>
                <title>Apply Now: Bit Quest Registration</title>
                <meta name="description" content="Hands-on Summer STEM Camp for students in Grades 2-5." />
                <meta property="og:title" content="Apply Now: Bit Quest Registration" />
                <meta property="og:image" content="https://i.imgur.com/kr1Szge.png" />
                <meta property="og:description" content="Hands-on Summer STEM Camp for students in Grades 2-5." />
                <meta property="og:url" content="https://www.bitproject.org/quest" />
                <meta property="og:site_name" content="bitproject.org" />
                <meta name="twitter:card" content="Hands-on Summer STEM Camp for students in Grades 2-5." />
                <meta name="twitter:site" content="@bitprj" />
                <meta name="twitter:creator" content="@bitprj" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar bg="#140B34" />

            <Img src='/cloud_sky_bkg.png' alt='clouds' />

            <Box textAlign='center' bg="#140B34">
                <Heading color='white' fontSize={{ base: '5xl', md: '7xl' }}>Bit Quest</Heading>
                <Text fontWeight='bold' fontSize={{ base: 'xl', md: '3xl', lg: '5xl' }} color='white'>
                    Explore the Scientific Method
                </Text>

                <Button
                    as="a"
                    href='https://jkfr7wbzytt.typeform.com/bit-quest-s22'
                    target="_blank"
                    size="lg"
                    color="white"
                    border="1px solid #2B6CB0"
                    bg="#9475ff"
                    mt='4'
                    px="8"
                    fontWeight="bold"
                    fontSize="md"
                    _hover={{
                        color: "white",
                        background: "#693dff",
                    }}
                    isExternal
                >
                    Apply Now
                </Button>
            </Box>

            <Box bg='#140B34' pt='3'>
                <Container
                    maxW="container.lg"
                    px="15px"
                >
                    <Heading color='white' fontSize='3xl'>Program Dates</Heading>
                    <Text color='white' fontSize='lg'>
                        June 18-July 30 (7 week program)
                    </Text>
                </Container>
            </Box>


            <Box bg='#140B34' pt='8'>
                <Container
                    maxW="container.lg"
                    p="15px"
                >

                    <Heading color='white' fontSize='3xl'>Location</Heading>
                    <Text color='white' fontSize='lg'>
                        Davis, California.
                    </Text>
                </Container>
            </Box>
            <Box bg='#140B34' pt='3'>
                <Container
                    maxW="container.lg"
                    px="15px"
                >
                    <Heading color='white' fontSize='3xl' mt='5'>Agenda</Heading>
                    <Text color='white' fontSize='lg'>
                        Each week is specifically designed to ensure students develop key skills that help them understand the “Scientific Method” and build projects that demonstrate what they have learned.
                    </Text>
                </Container>
            </Box>
            <DualCol
                preheading="week 1"
                heading="Growing Beans"
                para1="Think like a scientist, start asking questions, and turn your curiosity into a hypothesis."
                li1="🗓️ Requires 4 weeks"
                li2="🌱 Monitor plants and discuss conclusions at end of program"
                bg="#160C36"
            />

            <DualCol
                preheading="week 2"
                heading="Lava Lamp"
                para1="Observe the world around you and record your observations, making connections of how variables and constants interact with each others."
                bg="#160C36"
            />

            <DualCol
                preheading="week 3"
                heading="Hoop Glider"
                para1="Turn your observations into data by creating a process to collect, visualize, and analyze data."
                bg="#160C36"
            />

            <DualCol
                preheading="week 4"
                heading="Solar Systems"
                para1="Break through your limitations and discover knowledge by researching other credible sources."
                bg="#160C36"
            />

            <DualCol
                preheading="week 5"
                heading="Human Body Paper"
                para1="Combine all of your steps into one “Scientific Method,” formulate conclusions, and present your findings with fellow scientists."
                bg="#160C36"
            />

            <Footer bg="#0d0721" />




            {/* <Footer /> */}

        </div >
    )
}
