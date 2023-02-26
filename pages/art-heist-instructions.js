import Head from "next/head";
import { GraphicTabBottom } from "../components/graphictab/bottom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { TextWithPic } from "@/components/dualcol/TextWithPic";
import {
  List,
  Link,
  ListItem,
  Container,
  Button,
  Box,
  Text,
  SimpleGrid,
  Heading,
  Flex,
  LoremIpsum,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { TeamCard } from "@/components/TeamCard";
import Fade from "react-reveal/Fade";
import { NextSeo } from "next-seo";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Basic } from "@/components/Steps";

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

const content = <Flex py={4}>test test test</Flex>;

const URL = "https://www.bitproject.org/mentor";
const DESC =
  "We pair awesome engineers with students to give back to their communities.";

export default function ArtHeistInstructions() {
  return (
    <>
      <NextSeo
        title="Art Heist Instructions | Bit Project"
        description={DESC}
        canonical={URL}
        openGraph={{
          url: URL,
          title: "Bit Project",
          description: DESC,
          images: [
            {
              url: "https://www.bitproject.org/mongoScaled.png",
              width: 800,
              height: 600,
              alt: "MongoDB mentor",
              type: "image/png",
            },
          ],
          site_name: "bitproject.org/art-heist-instructions",
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

      <Container maxW="container.lg" p="15px" bg="black">
        <Box
          maxW={{
            base: "xl",
            md: "7xl",
          }}
          mx="auto"
          bg="black"
          color="white"
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="extrabold"
            maxW="48rem"
            lineHeight="1.2"
            letterSpacing="tight"
          >
            Art Heist Instructions
          </Heading>
          <Box my="1rem">
            <Text fontSize="lg" mr="3rem">
              Instructions for the{" "}
              <Link
                href="https://art-heist-bitprj.vercel.app/"
                isExternal
                color="blue.300"
              >
                Bit Project Art Heist Workshop
              </Link>
              .
            </Text>
          </Box>
        </Box>
        <Basic />
      </Container>

      <Footer />
    </>
  );
}
