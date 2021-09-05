import Head from 'next/head'
import React, { useState } from 'react'
import { Textblock } from '../components/textblock'
import { DualCol } from '../components/dualcol'
import { DualColLeftImage } from '../components/dualcol/left_image'
import { Navbar } from '../components/navbar'
import { GraphicTabBottom } from '../components/graphictab/bottom'
import { Footer } from '../components/footer'
import { HighlightBox } from '../components/dualcol/_box'
import { getAllFilesFrontMatter } from '../lib/mdx'
import {
    SimpleGrid,
    Container,
    Box,
    Heading,
    Text
} from '@chakra-ui/react'
import BlogLayout from '../layouts/blog'
import { Landing } from '../components/landing/landing_pfp'

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
                <title>CounselorBot</title>
                <meta name="description" content="COUNSELORBOT DESC" />
                <meta property="og:title" content="CounselorBot - Bit Project" />
                <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" />
                <meta property="og:description" content="Build awesome apps with Serverless functions, JavaScript, and APIs." />
                <meta property="og:url" content="https://www.bitproject.org/serverless" />
                <meta property="og:site_name" content="bitproject.org" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Landing
                heading="Learn how to code like an engineer"
                description="Guided, Interactive Tutorials on Github"
                logoImage="/tv.png"
                image="https://i.imgur.com/4Q1mhEj.png"
                cta1="GitHub"
                cta1link="https://github.com/bitprj/counselor"
                cta2="Try it Now >"
                cta2link="https://github.com/apps/counselorbot"
            />

            <DualColLeftImage
                heading="Meet CounselorBot"
                desc="Your friendly Github Bot here to help!"
                tab1Graphic="https://i.imgur.com/qTrXV38.png"
                tab2Graphic="https://i.imgur.com/qTrXV38.png"
                tab3Graphic="https://i.imgur.com/qTrXV38.png"
                tab1Head="Automated Code Reviews"
                tab2Head="Q&A Powered by AI/ML"
                tab3Head="Hands-on Curriculum"
                tab1Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                tab2Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                tab3Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

            />


            <Box as="section" bg="black" color="white">
                <Container
                    maxW="container.xl"
                // p="30px"
                >
                    <Heading as="h2" size="xl" fontWeight="extrabold">
                        Learn by Doing
                    </Heading>
                    <Text my="3" fontSize="xl">
                        Learn Software Engineering by Tackling Real-World Projects
                    </Text>
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
