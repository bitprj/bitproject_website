import Head from 'next/head'
import { Landing } from '../components/landing.jsx'
import { TriCol } from '../components/tricol'
import { Testimonials } from '../components/testimonials'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { Box, Img, Heading, Text } from '@chakra-ui/react'
import { DualCol } from '../components/DualCol'

export default function BitQuest() {
    return (
        <div>
            <Head>
                <title>Bit Quest</title>
                <meta name="description" content="We provide cutting-edge, open source learning experiences to prepare students for careers in tech." />
                <meta property="og:title" content="Bit Project" />
                <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" />
                <meta property="og:description" content="We provide cutting-edge, open source learning experiences to prepare students for careers in tech." />
                <meta property="og:url" content="https://www.bitproject.org/" />
                <meta property="og:site_name" content="bitproject.org" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar bg="#160C36" />

            <Box minH='100vh' bg="url('/bit-quest-bkg.png')center center" position='cover' d='flex' alignItems='center' justifyContent='center'>
                <Box textAlign='center'>
                    <Box d='flex' alignItems='center' justifyContent='center'>
                        <Img
                            src="/logo.png"
                            h="9"
                            display="inline"
                            mr="3"
                            mt="-1"
                        />
                        <Text
                            as="h1"
                            fontSize="3xl"
                            fontWeight="extrabold"
                            maxW="48rem"
                            display="inline"
                            color="white"
                        >Bit Project</Text>
                    </Box>

                    <Heading color='#B5A0FF' fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}>Bit Quest</Heading>
                    <Text fontWeight='bold' fontSize={{ base: 'xl', md: '3xl', lg: '5xl' }} color='#B5A0FF'>
                        explore stem
                    </Text>
                </Box>
            </Box>

            <DualCol
                preheading="week 1"
                heading="Growing Beans"
                para1="Think like a scientist, start asking questions, and turn your curiosity into a hypothesis."
                li1="🗓️ Requires 4 weeks"
                li2="🌱 Monitor plants and discuss conclusions at end of program"
                img="/week1.gif"
                bg="#160C36"
            />

            <DualCol
                preheading="week 2"
                heading="Lava Lamp"
                para1="Observe the world around you and record your observations, making connections of how variables and constants interact with each others."
                img="/week1.gif"
                bg="#160C36"
            />

            <DualCol
                preheading="week 3"
                heading="Hoop Glider"
                para1="Turn your observations into data by creating a process to collect, visualize, and analyze data."
                img="/week1.gif"
                bg="#160C36"
            />

            <DualCol
                preheading="week 4"
                heading="Solar Systems"
                para1="Break through your limitations and discover knowledge by researching other credible sources."
                img="/week1.gif"
                bg="#160C36"
            />

            <DualCol
                preheading="week 5"
                heading="Human Body Paper"
                para1="Combine all of your steps into one “Scientific Method,” formulate conclusions, and present your findings with fellow scientists."
                img="/week1.gif"
                bg="#160C36"
            />

            <Footer bg="#0d0721" />




            {/* <Footer /> */}

        </div>
    )
}
