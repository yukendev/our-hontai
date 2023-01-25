import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { colors } from 'client/styles/colors';
import '../client/styles/global.scss';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import { GA_MEASUREMENT_ID, useGoogleAnalytics } from 'server/utils/gtag';

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
  useGoogleAnalytics();
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <DefaultSeo
        defaultTitle='みんなの本屋大賞'
        description='本屋大賞ファンによる、本屋大賞ファンのためのサービスです。最新の本屋大賞ノミネート作品から、過去のノミネート作品までまとめています。Googleアカウントと連携をすることで感想を投稿したり、自分だけの読書記録を作ることもできます'
        openGraph={{
          type: 'website',
          title: 'みんなの本屋大賞',
          description:
            '本屋大賞ファンによる、本屋大賞ファンのためのサービスです。最新の本屋大賞ノミネート作品から、過去のノミネート作品までまとめています。Googleアカウントと連携をすることで感想を投稿したり、自分だけの読書記録を作ることもできます',
          site_name: 'みんなの本屋大賞',
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
