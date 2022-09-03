import Head from "next/head";
import React, { useState } from "react";
import { Landing } from "../components/landing.jsx";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { HighlightBox } from "../components/dualcol/_box";
import { getAllFilesFrontMatter } from "../lib/mdx";
import { SearchIcon } from "@chakra-ui/icons";

import {
  Container,
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  StackDivider,
  useColorMode,
  chakra,
  SimpleGrid,
} from "@chakra-ui/react";
import BlogLayout from "../layouts/blog";
import { NextSeo } from "next-seo";
const URL = "https://www.bitproject.org/blog";
const DESC = "Like reading? Feel free to explore all of our awesome blogs!";

export default function BlogPage({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter(
      (frontMatter) =>
        frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase()) ||
        frontMatter.category.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title="Blogs | Bit Project"
        description={DESC}
        canonical={URL}
        openGraph={{
          url: URL,
          title: "Bit Project",
          description: DESC,
          images: [
            {
              url: "blogs.png",
              width: 800,
              height: 600,
              alt: "Screenshot of blogs page",
              type: "image/png",
            },
          ],
          site_name: "bitproject.org/blog",
        }}
        twitter={{
          handle: "@bitprj",
          site: "Bit Project",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing
        heading="Blogs"
        description="Like reading? Feel free to explore all of our awesome blogs!"
        logoImage="/tv.png"
        cta1link={
          " https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017"
        }
        cta2link={"https://airtable.com/shr9hT8pEXpAAM00Z"}
      />

      <Box as="section" bg="black" color="white">
        <Container maxW="container.xl" pb="10">
          <InputGroup mb={4} mx="auto">
            <Input
              aria-label="Search by post title or summary"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search by post title or summary"
            />
            <InputRightElement>
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>

          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3 }}
            spacing="40px"
            bg="black"
            justify="center"
          >
            {filteredBlogPosts.map((frontMatter) => (
              <HighlightBox
                key={frontMatter.title}
                title={frontMatter.title}
                companyLogo={frontMatter.companyLogo}
                image={frontMatter.image}
                category={frontMatter.category}
                link={`${frontMatter.category}/${frontMatter.slug}`}
                mx="auto"
                cohort={frontMatter.cohort}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticProps() {
  //   const categories = ["projects", "workshops"];
  const categories = ["projects"];
  const finalPosts = [];

  for (var i = 0; i < categories.length; i++) {
    const retrievedPosts = await getAllFilesFrontMatter(categories[i]);
    finalPosts.push(...retrievedPosts);
  }

  return { props: { posts: finalPosts } };
}
