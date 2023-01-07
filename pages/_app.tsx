import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const myTheme = extendTheme({
  colors: {
    myTheme: {
      darkOrange: '#FF7B54',
      paleOrange: '#FFB26B',
      yellow: '#FFD56F',
      green: '#939B62',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
