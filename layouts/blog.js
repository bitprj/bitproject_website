import React, { useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Flex,
    Stack,
    Link,
    Box,
    Container
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { DescDualCol } from '../components/dualcol/descriptive'

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
        <Box h={1}  as="div" bgGradient="linear(to-r, green.200, pink.500)" position="sticky" top={0} zIndex={100} w={`${width}%`} ></Box>
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
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
                            // categoryLogo, heading, desc, profile, profileLogo, cta1, cta1Link, cta2Link, cta2, pic
                            heading={frontMatter.title}
                            profile={frontMatter.by}
                            desc={frontMatter.summary}
                            pic={frontMatter.Image}
                            
                            // cta1={frontMatter}
                        />
                        
                        {/* <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            {frontMatter.title}
                        </Heading>
                        <Flex
                            justify="space-between"
                            align={['initial', 'center']}
                            direction={['column', 'row']}
                            mt={2}
                            w="100%"
                            mb={4}
                        >
                            <Flex align="center">
                                <Avatar
                                    size="xs"
                                    name="Benjamin Carlson"
                                    src="../images/portrait.jpeg"
                                    mr={2}
                                />
                                <Text fontSize="sm" color={textColor[colorMode]}>
                                    {frontMatter.by}
                                    {'Benjamin Carlson / '}
                                    {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                                </Text>
                            </Flex>
                            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                            {frontMatter.readingTime.text}
                        </Text>
                        </Flex>
                        {frontMatter.Image != '' ? <Image src={frontMatter.image} alt={frontMatter.alt} /> : null} */}

                    </Flex>
                    {children}
                    <Box>
                        <Link href={tweetUrl(slug)} isExternal>
                            {'Share on Twitter'}
                        </Link>
                        {` • `}
                        <Link href={editUrl(slug)} isExternal>
                            {'Edit on GitHub'}
                        </Link>
                    </Box>
                
                </Stack>
                </Container>
        </Box>
        </>
    )
}
