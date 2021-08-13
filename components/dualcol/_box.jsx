import {
    Box,
    Img,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import Image from 'next/image'
import { ProfileIcon } from '../profileicon/index'

export const HighlightBox = ({ title, companyLogo, image, link, cohort }) => {
    let bkgUrl = `url(${image})`
    return (
        <Box
            overflow="hidden"
            mx="auto"
            as="a"
            w="375px"
            borderRadius="5px"
            href={link}
            bg="#363636"
            transition="all 0.2s"
            pb="6"
            _hover={{ bg: '#4a4a4a' }}
        >
            <Box h="15rem" bgImage={bkgUrl} bgPosition="center"
                bgRepeat="no-repeat" backgroundSize="cover">
            </Box>
            <Box
                fontWeight="semibold"
                lineHeight="tight"
                mx="4"
                mt="6"
            >

                <Text fontSize="2xl" fontWeight="800" color="white">
                    {title}
                </Text>



            </Box>

            {companyLogo && <>
                <Text fontSize="md" color="#CCCDCE" display="inline" mr="3" mt="2" ml="4">
                    In Collaboration with
                </Text>
                <Img src={companyLogo} h="40px" w="40px" display="inline" />
            </>}

            {cohort && <Box mt="2" mx="4" fontWeight="semibold">
                <Text fontSize="sm" color="grey">
                    {cohort}
                </Text>
            </Box>
            }

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

    )
}
