import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Link,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    Container,
    Box,
    Img,
    SimpleGrid
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { HighlightBox } from '../dualcol/_box'

export const OverallBlog = ({ posts }) => {
    const [searchValue, setSearchValue] = useState('')
    const { colorMode } = useColorMode()
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    // const filteredBlogPosts = posts
    //     .sort(
    //         (a, b) =>
    //             Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    //     )
    //     .filter((frontMatter) =>
    //         frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    //         frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase())
    //     )

    return (
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <Container
                maxW="container.lg"
                p="15px"
            >

                <Heading
                    as="h1"
                    size="2xl"
                    fontWeight="extrabold"
                    maxW="48rem"
                    mx="auto"
                    letterSpacing="tight"
                    textAlign='center'
                    mb="3"
                >Blog
                            </Heading>

                <Text fontSize="lg" mx="auto" textAlign="center" mb="6">
                    We currently have XX posts
                        </Text>

                <InputGroup maxW="30rem" mx="auto" mb="6">
                    <Input
                        aria-label="Search by post title or summary"
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search by post title or summary"
                        mx="auto"
                        borderRadius="10px"
                    />
                    <InputRightElement>
                        <SearchIcon color="gray.300" />
                    </InputRightElement>
                </InputGroup>
                {/* {!filteredBlogPosts.length && 'No posts found.'}
                        {filteredBlogPosts.map((frontMatter) => (
                            <BlogPost key={frontMatter.title} {...frontMatter} />
                        ))} */}

                <SimpleGrid minChildWidth="400px" spacing="40px" columnGap="0">
                    <Link href="testlink" _hover="">
                        <HighlightBox
                            title="test title"
                            companyLogo="/awsLogo.svg"
                            image="/livecode.png"
                        />
                    </Link>

                    <Link href="testlink" _hover="">
                        <HighlightBox
                            title="test title"
                            companyLogo="/awsLogo.svg"
                            image="/livecode.png"
                        />
                    </Link>

                    <Link href="testlink" _hover="">
                        <HighlightBox
                            title="test title"
                            companyLogo="/awsLogo.svg"
                            image="/livecode.png"
                        />
                    </Link>

                    <Link href="testlink" _hover="">
                        <HighlightBox
                            title="test title"
                            companyLogo="/awsLogo.svg"
                            image="/livecode.png"
                        />
                    </Link>
                </SimpleGrid>




            </Container>
        </Box>
    )
}

function Feature({ title, desc, ...rest }) {
    return (
        <Box p={5} shadow="md" border="1px solid white" borderRadius="10px" {...rest}>

            <Stack direction={["row"]} spacing="10px" align="center">
                <Box>
                    <Heading fontSize="xl">{title}</Heading>
                    <Text mt={4}>{desc}</Text>
                </Box>
                <Img src="https://cataas.com/cat" maxH="5rem" borderRadius="10px" />
            </Stack>
        </Box>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}
