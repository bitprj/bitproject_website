import Head from 'next/head'
import React, { useState } from 'react'
import { Landing } from '../components/landing.jsx'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { HighlightBox } from '../components/dualcol/_box'
import { getAllFilesFrontMatter } from '../lib/mdx'
import {
    SimpleGrid,
    Container,
    Box,
} from '@chakra-ui/react'
import BlogLayout from '../layouts/blog'

export default function Workshops({ posts }) {
    const [searchValue, setSearchValue] = useState('')
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
                <title>Blog</title>
                <meta name="description" content="Like reading? Feel free to explore all of our awesome tech blogs!" />
                <meta property="og:title" content="Blog - Bit Project" />
                <meta property="og:image" content="https://www.bitproject.org/_next/image?url=%livecode.png&w=2048&q=75" />
                <meta property="og:description" content="Like reading? Feel free to explore all of our awesome tech blogs!" />
                <meta property="og:url" content="https://www.bitproject.org/blog" />
                <meta property="og:site_name" content="bitproject.org" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Landing
                heading="Blogs"
                description="Like reading? Feel free to explore all of our awesome blogs!"
                logoImage="/tv.png"
                cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
                cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
            />

            <Box as="section" bg="black" color="white">
                <Container
                    maxW="container.xl"
                >
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px" bg="black" justify="center" >
                        {filteredBlogPosts.map((frontMatter) => (
                            <HighlightBox key={frontMatter.title} title={frontMatter.title} companyLogo={frontMatter.companyLogo} image={frontMatter.image} link={`${frontMatter.category}/${frontMatter.slug}`} mx="auto" cohort={frontMatter.cohort} />
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

    const categories = ['projects', 'workshops'];
    const finalPosts = [];

    for (var i = 0; i < categories.length; i++) {
        const retrievedPosts = await getAllFilesFrontMatter(categories[i])
        finalPosts.push(...retrievedPosts)
    }

    return { props: { posts: finalPosts } }
}
