import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { colors } from 'client/styles/colors';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: colors.paleOrange,
        color: colors.paleBlack,
      },
    },
  },
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
