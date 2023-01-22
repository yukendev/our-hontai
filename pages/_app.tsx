import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { colors } from 'client/styles/colors';
import '../client/styles/global.scss';
import { DefaultSeo } from 'next-seo';

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
    <>
      <DefaultSeo
        defaultTitle='みんなで本屋大賞'
        description='本屋大賞ファンによる、本屋大賞ファンのためのサービスです。最新の本屋大賞ノミネート作品から、過去のノミネート作品までまとめています。Googleアカウントと連携をすることで感想を投稿したり、自分だけの読書記録を作ることもできます'
        openGraph={{
          type: 'website',
          title: 'みんなで本屋大賞',
          description:
            '本屋大賞ファンによる、本屋大賞ファンのためのサービスです。最新の本屋大賞ノミネート作品から、過去のノミネート作品までまとめています。Googleアカウントと連携をすることで感想を投稿したり、自分だけの読書記録を作ることもできます',
          site_name: 'みんなで本屋大賞',
          url: 'https://our-hontai.com',
          images: [
            {
              url: 'https://our-hontai.com/ogp.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@our_hontai',
          site: '@our_hontai',
          cardType: 'summary_large_image',
        }}
      />
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
