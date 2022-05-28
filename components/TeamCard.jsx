import {
  Box,
  Badge,
  HStack,
  Icon,
  Text,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export const TeamCard = ({ name, title, company, img, twitter, linkedin }) => {
  return (
    <Box
      border="1px solid lightgray"
      borderRadius="10px"
      textAlign="center"
      p="4"
    >
      <Badge colorScheme="blue" px={2} mt={"-60px"}>
        {title}
      </Badge>
      <WrapItem mb={2}>
        <Avatar
          height="150px"
          width="150px"
          name={name}
          src={img}
          mx="auto"
          bg="transparent"
        />
      </WrapItem>

      <Text
        color={"brandLight.gray"}
        fontWeight="bold"
        fontSize={{ base: "md", lg: "lg" }}
      >
        {name}
      </Text>
      {company && (
        <Text
          color={"brandLight.gray"}
          fontStyle="italic"
          fontSize={{ base: "sm", lg: "md" }}
        >
          {company}
        </Text>
      )}

      <HStack justify="center">
        {twitter && (
          <Box as="a" href={twitter} taraget="_blank">
            <Icon as={AiOutlineTwitter} fontSize="3xl" color="#1DA1F2" />
          </Box>
        )}
        {linkedin && (
          <Box as="a" href={linkedin} taraget="_blank">
            <Icon as={AiFillLinkedin} fontSize="3xl" color="#0077b5" />
          </Box>
        )}
      </HStack>
    </Box>
  );
};
