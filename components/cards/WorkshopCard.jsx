import { Badge, Box, Text, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import Image from "next/image";

export const WorkshopCard = ({ title, image, link, subtext }) => {
  let bkgUrl = `url(${image})`;
  let colors = {
    projects: "blue.800",
    workshops: "purple.800",
  };
  return (
    <Box
      overflow="hidden"
      mx="auto"
      as="a"
      w={{ sm: "100%" }} // width 100 when larger than sm
      href={link}
      bg="#363636"
      rounded="0"
      transition="all 0.2s"
      pb="6"
      _hover={{ bg: "#4a4a4a" }}
      target="_blank"
    >
      <Box
        h="15rem"
        bgImage={bkgUrl}
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
      ></Box>
      <Box fontWeight="semibold" lineHeight="tight" mx="4" mt="6">
        <Text fontSize="2xl" fontWeight="800" color="white">
          {title}
        </Text>

        {subtext && (
          <Text color="#CCCDCE" fontSize="md">
            {subtext}
          </Text>
        )}
      </Box>

      {/* <Box mx="4"
                mt="5">
                <ProfileIcon
                    color="grey"
                    // pic={authorImage}
                    // name={author}
                    // title={datePublished}
                    pic="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
                    name="Ganning Xu"
                    title="Cohort 2"
                />
            </Box> */}
    </Box>
  );
};
