import React from 'react'
import { useColorMode, ColorModeProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/react'
// import { DefaultSeo } from 'next-seo'
import { prismLightTheme, prismDarkTheme } from '../styles/prism'
import MDXComponents from '../components/MDXComponents'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#15161a'};
            // background: ${colorMode === 'light' ? 'white' : '#000000'};
          }
        `}
      />
      {children}
    </>
  )
}

const theme = extendTheme({
  colors: {
    black: {
      'off': '#15161a'
    }

  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </MDXProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp