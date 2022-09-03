import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  useColorMode,
  Flex,
  Stack,
  Link,
  Img,
  Box,
  Container,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { DescDualCol } from "../components/dualcol/descriptive";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import Image from "next/image";
import { NextSeo } from "next-seo";
export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const iconColor = {
    light: "gray.600",
    dark: "gray.300",
  };
  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");

  const [width, setWidth] = useState(1);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    setWidth(scrollPercentRounded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <NextSeo
        title={frontMatter.title + " | Bit Project"}
        description={frontMatter.summary}
        canonical={"https://bitproject.org/projects" + frontMatter.slug}
        openGraph={{
          url: "https://bitproject.org/projects" + frontMatter.slug,
          title: "Bit Project",
          description: frontMatter.summary,
          images: [
            {
              url: frontMatter.image,
              width: 800,
              height: 600,
              alt: "Blog picture",
              type: "image/png",
            },
          ],
          site_name: "bitproject.org",
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
      <Box as="section" bg="black" pt="24" overflow="hidden" color="white">
        <Container maxW="container.lg" p="15px">
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
                {frontMatter.companyLogo && (
                  <>
                    <Text
                      fontSize="md"
                      color="#CCCDCE"
                      mt="3"
                      display="inline"
                      mr="3"
                    >
                      In Collaboration with
                    </Text>
                    <Image
                      border="2px solid red"
                      height="50px"
                      width="50px"
                      src={frontMatter.companyLogo}
                      alt={frontMatter.companyLogo}
                      display="inline"
                    />
                  </>
                )}
              </Flex>
            </Flex>
            <Divider />
            {children}
          </Stack>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
