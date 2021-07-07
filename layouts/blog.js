import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
    useColorMode,
    Flex,
    Stack,
    Link,
    Img,
    Box,
    Container,
    Text,
    Divider
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { DescDualCol } from '../components/dualcol/descriptive'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

const editUrl = (slug) =>
    `https://github.com/bjcarlson42/benjamincarlson.io/edit/main/pages/blog${slug}.mdx`
const tweetUrl = (slug) =>
    `https://twitter.com/intent/tweet?text=https://benjamincarlson.io/blog${slug} by @bjmncrlsn`

export default function BlogLayout({ children, frontMatter }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    }
    const router = useRouter();
    const slug = router.asPath.replace('/blog', '')


    const [width, setWidth] = useState(1)
    const handleScroll = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setWidth(scrollPercentRounded)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
        <Head>
        <title>{frontMatter.title}</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Box as="section" bg="black" pt="24" overflow="hidden" color="white">
        <Container
            maxW="container.lg"
            p="15px"
            >
            
                <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    w="100%"
                    px={2}
                    
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        w="100%"
                    >
                        <DescDualCol 
                            heading={frontMatter.title}
                            profile={frontMatter.by}
                            desc={frontMatter.summary}
                            pic={frontMatter.image}
                            
                        />
                        <Flex>
                        {frontMatter.companyLogo && <>
                            <Text fontSize="md" color="#CCCDCE" mt="3" display="inline" mr="3">
                                In Collaboration with
                            </Text>
                            <Img src={frontMatter.companyLogo} h="50px" display="inline"/>
                        </>}
                        </Flex>

                    </Flex>
                    <Divider />
                    {children}              
                </Stack>
                </Container>
                <Footer />
        </Box>
        </>
    )
}
