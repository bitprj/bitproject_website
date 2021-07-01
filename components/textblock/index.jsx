import { Box, Stack, StackDivider, Heading, Container, Grid, GridItem } from '@chakra-ui/react'
import * as React from 'react'
// import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
// import { Logo } from './Logo'
// import { SocialMediaLinks } from './SocialMediaLinks'
// import { SubscribeForm } from './SubscribeForm'


export const Textblock = ({ title, para1, para2 }) => (
  // <Box
  //   as="footer"
  //   role="contentinfo"
  //   mx="auto"
  //   maxW="7xl"
  //   py="12"
  //   px={{
  //     base: '4',
  //      md: '8',
  //   }}
  // >

  // </Box>
  <Box
    bg="black"
    color="white"
    >
    <Container
      maxW="container.lg"
    >
    <Heading
      as="h1"
      size="3xl"
      fontWeight="extrabold"
      maxW="48rem"
      lineHeight="1.2"
      letterSpacing="tight"
    >
      {title}
    </Heading>
    
    <Grid 
    templateColumns="repeat(5, 1fr)" 
    gap={4}
    mt="1rem"
    >
      <GridItem colSpan={2}>{para1}</GridItem>
      <GridItem colStart={4} colEnd={6}>{para2}</GridItem>
    </Grid>
      {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, error! Eaque quia natus ipsa suscipit cumque, praesentium cupiditate delectus architecto?</p> */}
    </Container>
  </Box>
)



// export const Textblock = ({ title, para1, para2 }) => (
//   <Box
//     as="footer"
//     role="contentinfo"
//     mx="auto"
//     maxW="7xl"
//     py="12"
//     px={{
//       base: '4',
//        md: '8',
//     }}
//   >
//     <Stack spacing="10" divider={<StackDivider />}>
//       <Stack
//         direction={{
//           base: 'column',
//           lg: 'row',
//         }}
//         spacing={{
//           base: '10',
//           lg: '28',
//         }}
//       >
//         <Box flex="1">
//           {/* <Logo /> */}
//         </Box>
//         {/* <Stack
//           direction={{
//             base: 'column',
//             md: 'row',
//           }}
//           spacing={{
//             base: '10',
//             md: '20',
//           }}
//         > */}
//           <LinkGrid
//             spacing={{
//               base: '10',
//               md: '20',
//               lg: '28',
//             }}
//             flex="1"
//           />
//           {/* <SubscribeForm
//             width={{
//               base: 'full',
//               md: 'sm',
//             }}
//           /> */}
//         </Stack>
//       </Stack>
//       {/* <Stack
//         direction={{
//           base: 'column-reverse',
//           md: 'row',
//         }}
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <Copyright />
//         <SocialMediaLinks />
//       </Stack> */}
//     {/* </Stack> */}
//   </Box>
// )


