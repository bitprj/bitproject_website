import { SimpleGrid, Heading, Text, Container, UnorderedList, ListItem, ListIcon, Box, Img } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

export const TextWithPic = ({ pic, title, items1, bgColor }) => {
    return (
        <Box bg='black' color='white'>
            <Container
                maxW="container.lg"
                p="15px"
            >
                {title && <Heading>{title}</Heading>}

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" justifyContent="start" alignItems="center" bg='black' pt={8}>
                    <Box maxW="500px">
                        <UnorderedList spacing={3} fontSize='lg' color='gray.300'>
                            <ListItem>
                                <Text textAlign='left'>Knowledge of tech industry & familiarity with:</Text>
                            </ListItem>
                            <UnorderedList>
                                <ListItem>
                                    <Text textAlign='left'>Serverless technology, especially Azure Portal and VS Code Azure extension</Text>
                                    <ListItem>
                                        <Text textAlign='left'>Azure use cases (e.g.
                                            , Function Apps, Logic Apps, etc.)</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Basic web dev (frontend and backend)</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Experience with NodeJS, HTML/CSS, NoSQL</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Working with APIs & reading documentation</Text>
                                    </ListItem>
                                </ListItem>
                            </UnorderedList>
                            <ListItem>
                                <Text>Willing to commit 1-3 hours per week during program</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Commit to completing course (assignments not required, but mentors must at least look through curriculum & solutions) before course start date</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Excitement about tech and eagerness to help future engineers!</Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>

                    <Box mx="auto">
                        <Img src={pic} alt="pic" />
                    </Box>


                </SimpleGrid >
            </Container>
        </Box >
    )
}