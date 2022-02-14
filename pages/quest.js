import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { Box, Img, Heading, Text, Container } from '@chakra-ui/react'
import { DualCol } from '../components/dualcol'

export default function BitQuest() {
    return (
        <div>
            <Head>
                <title>Bit Quest</title>
                <meta name="description" content="We provide cutting-edge, open source learning experiences to prepare students for careers in tech." />
                <meta property="og:title" content="Bit Quest" />
                <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" />
                <meta property="og:description" content="We provide cutting-edge, open source learning experiences to prepare students for careers in tech." />
                <meta property="og:url" content="https://www.bitproject.org/" />
                <meta property="og:site_name" content="bitproject.org" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar bg="#140B34" />

            <Img src='/cloud_sky_bkg.png' alt='clouds' />

            <Box textAlign='center' bg="#140B34">
                <Heading color='white' fontSize={{ base: '5xl', md: '7xl' }}>Bit Quest</Heading>
                <Text fontWeight='bold' fontSize={{ base: 'xl', md: '3xl', lg: '5xl' }} color='white'>
                    explore the scientific method
                </Text>
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
