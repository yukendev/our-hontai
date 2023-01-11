import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

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

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
