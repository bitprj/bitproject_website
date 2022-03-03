import {
    SimpleGrid, Container, Box, Heading, Text, Button, useColorMode, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

export const ServerlessCompare = ({ title1, items1, title2, items2, astrick1 }) => {
    return (
        <Box bg='black' color='white'>
            <Container
                maxW="container.lg"
                p="15px"
            >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    <Box bg='gray.900' p={4} rounded='md'>
                        <Heading as="h2" size="lg" fontWeight="semibold" mb="4">
                            {title1}
                        </Heading>
                        <List spacing={3} fontSize='lg' color='gray.300'>
                            {
                                items1.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        {item}
                                    </ListItem>
                                ))
                            }
                        </List>
                        {astrick1 && <Text fontSize='sm' color='gray.500' mt={4}>{astrick1}</Text>}
                    </Box>

                    <Box bg='gray.900' p={4} rounded='md'>
                        <Heading as="h2" size="lg" fontWeight="semibold" mb="4">
                            {title2}                        </Heading>
                        <List spacing={3} fontSize='lg' color='gray.300'>
                            {
                                items2.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        {item}
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}