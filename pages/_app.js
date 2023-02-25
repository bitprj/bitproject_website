import React from "react";
import { useColorMode, ColorModeProvider, extendTheme } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import MDXComponents from "../components/MDXComponents";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const theme = extendTheme({
  components: {
    Steps,
  },
});

function ForceDarkMode({ children }) {
  // force light mode b/c of ChakraUI bug
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return children;
}

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "black" : "#000000"};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <ForceDarkMode>
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
      </ForceDarkMode>
    </ChakraProvider>
  );
}

export default MyApp;
