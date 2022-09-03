import Head from "next/head";
// import React, { useState } from "react";
import { Landing } from "../components/landing.jsx";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
// import { HighlightBox } from "../components/dualcol/_box";
// import { getAllFilesFrontMatter } from "../lib/mdx";
import { SimpleGrid, Container, Box } from "@chakra-ui/react";
// import BlogLayout from "../layouts/blog";
import { WorkshopCard } from "../components/cards/WorkshopCard";
import { NextSeo } from "next-seo";

export default function Workshops({ posts }) {
  // const [searchValue, setSearchValue] = useState("");
  // const filteredBlogPosts = posts
  //   .sort(
  //     (a, b) =>
  //       Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  //   )
  //   .filter(
  //     (frontMatter) =>
  //       frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase())
  //   );

  const URL = "https://www.bitproject.org/workshops";
  const DESC =
    "We make fun, interactive workshops to give students hands-on experience with cutting edge tools.";

  return (
    <>
      <NextSeo
        title="Workshops | Bit Project"
        description={DESC}
        canonical={URL}
        openGraph={{
          url: URL,
          title: "Bit Project",
          description: DESC,
          images: [
            {
              url: "https://pbs.twimg.com/profile_banners/1174856501204111360/1586338003/1500x500",
              width: 1500,
              height: 500,
              alt: "MongoDB workshop",
              type: "image/png",
            },
          ],
          site_name: "bitproject.org/workshops",
        }}
        twitter={{
          handle: "@bitprj",
          site: "Bit Project",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <title>Workshops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing
        heading="Technical Workshops"
        description="We make fun, interactive workshops to give students hands-on experience with cutting edge tools."
        logoImage="/tv.png"
        image="/workshop.gif"
        formActionButton="Get Notified"
        formResponse="See you soon ❤️"
        formDesc="Get notified about future workshops below!"
      />

      <Box as="section" bg="black" color="white">
        <Container maxW="container.xl" p="30px">
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing="40px"
            bg="black"
            justify="center"
          >
            {/* {filteredBlogPosts.map((frontMatter) => (
              <HighlightBox
                key={frontMatter.title}
                title={frontMatter.title}
                companyLogo={frontMatter.companyLogo}
                image={frontMatter.image}
                link={`workshops/${frontMatter.slug}`}
                mx="auto"
              /> 
            ))} */}
            <WorkshopCard
              title="Personal Branding Workshop"
              image="https://i.imgur.com/MptPBmh.jpg"
              link="https://www.youtube.com/watch?v=Q3pN3sTeX00"
              subtext="With Joon"
            />
            <WorkshopCard
              title="Build a Serverless Web App that Sends Notifications"
              image="https://i.imgur.com/TgJOtDN.jpg"
              link="https://www.youtube.com/watch?v=gFpfZ9XaB0M"
            />
            <WorkshopCard
              title="Build a Dynamic Image (Sticker) Generator with Azure"
              image="https://i.imgur.com/y3tSJgK.jpg"
              link="https://www.youtube.com/watch?v=JVulJtDktjk"
            />
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

// export function Blog({ mdxSource, frontMatter }) {
//   const content = hydrate(mdxSource, {
//     components: MDXComponents,
//   });

//   return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
// }

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter("workshops");
//   return { props: { posts } };
// }
