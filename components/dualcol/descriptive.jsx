import {
    Box,
    Button,
    Flex,
    Heading,
    Img,
    Container,
    Text,
    Badge,
    Link,
    useColorModeValue as mode,
    Wrap,
    WrapItem,
    Avatar,
    Stack
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import * as React from 'react'
export const DescDualCol = ({ categoryLogo, heading, desc, profile, profileLogo, cta1, cta1Link, cta2Link, cta2, pic }) => {
    return (
        <Box as="section" bg="black" pt="24" pb="12" overflow="hidden" color="white">
            <Container
                maxW="container.lg"
                p="15px"
            >
                <Box
                    margin="0"
                >
                    <Stack
                        direction={{
                            base: 'column',
                            lg: 'row',
                        }}
                        spacing={{
                            base: '1rem',
                            lg: '2rem',
                        }}

                        align={{
                            lg: 'center',
                        }}
                        justify="start"
                        display="flex"
                    >
                        <Img
                            pos="relative"
                            zIndex="1"
                            maxH="50vh" // change this line for the image height
                            objectFit="scale-down"
                            src={pic}
                            alt="Screening talent"
                        />


                        <Box
                            w={{
                                base: 'full',
                                lg: '560px',
                            }}
                            h={{
                                base: 'auto',
                                lg: '560px',
                            }}
                            display="flex"
                            alignItems="center"
                        >


                            <Box
                                flex="1"
                                maxW={{
                                    lg: '520px',
                                }}
                            >
                                <Wrap>
                                    <WrapItem>
                                        <Avatar src={categoryLogo} bg="transparent" />
                                    </WrapItem>
                                </Wrap>
                                <Heading mt="4" as="h2" size="xl" fontWeight="extrabold" lineHeight="3rem">
                                    {heading}
                                </Heading>

                                <Text my="5" fontSize="xl" color="#CDCDD2 ">
                                    {desc}
                                </Text>
                                <Wrap>
                                    <WrapItem>
                                        <Avatar src={profileLogo} bg="transparent"  />
                                        <Text fontSize="xl" my="2" ml="2" color="#CDCDD2">
                                            {profile}
                                        </Text>
                                    </WrapItem>
                                </Wrap>

                                <Stack
                                    direction={{
                                        base: 'column',
                                        md: 'row',
                                    }}
                                    spacing="4"
                                    mt="8"
                                >
                                    <Stack direction="row">
                                        <Badge bg="#575757" color="#FFFFFF" px="3" py="2">
                                        <Link href={cta1Link}isExternal>
                                            {cta1}
                                        </Link>
                                        </Badge>
                                        <Badge bg="#575757" color="#FFFFFF" px="3" py="2">
                                        <Link href={cta2Link}isExternal>
                                            {cta2}
                                        </Link>
                                        </Badge>
                                    </Stack>
                                </Stack>
                            </Box>




                        </Box>


                    </Stack>
                </Box>
            </Container>
        </Box>

    )
}
