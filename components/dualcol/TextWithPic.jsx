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
                            {
                                items1.map((item, index) => (
                                    <ListItem key={index} >

                                        <Text textAlign='left'>
                                            {item}
                                        </Text>
                                    </ListItem>
                                ))
                            }
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