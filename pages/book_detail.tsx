import { Box, Flex } from '@chakra-ui/react';
import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { BookDetailPage } from '@components/pages/BookDetailPage';
import { IBookInfo } from 'interface/bookInfo';
import { GetServerSideProps } from 'next';
import { BookService } from 'server/services/book';
import { NextSeo } from 'next-seo';
import { setupMongo } from 'server/utils/mongoose';

type Props = {
  bookInfo: IBookInfo;
};

export default function BookDetailsPage(props: Props) {
  const { bookInfo } = props;
  return (
    <>
      <NextSeo
        title={`【${bookInfo.year}年本屋大賞ノミネート】${bookInfo.author} ${bookInfo.title}`}
        description={`${bookInfo.year}年の本屋大賞ノミネートした、${bookInfo.title}の情報を紹介します。この本を読んだ人の感想も見ることができます`}
      />
      <Flex flexDirection='column'>
        <Header />
        <Box flex={1}>
          <BookDetailPage {...bookInfo} />
        </Box>
        <Footer />
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const isbn = Number(context.query.isbn);

  await setupMongo();

  try {
    const bookInfo = await BookService.getBookInfoByIsbn(isbn);

    return {
      props: {
        bookInfo,
      },
    };
  } catch {
    // isbnから書籍のデータが取れない場合はリダイレクト
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
};
