import { Box } from '@chakra-ui/react';
import { Header } from '@components/organisms/Header';
import { BookDetailPage } from '@components/pages/BookDetailPage';
import { IBookInfo } from 'interface/bookInfo';
import { GetServerSideProps } from 'next';
import { BookService } from 'server/services/book';

type Props = {
  bookInfo: IBookInfo;
};

export default function BookDetailsPage(props: Props) {
  const { bookInfo } = props;
  return (
    <Box>
      <Header />
      <BookDetailPage {...bookInfo} />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isbn = Number(context.query.isbn);

  // TODO: クエリパラメータがない、不適切な時の対応
  const bookInfo = await BookService.getBookInfoByIsbn(isbn);

  return {
    props: {
      bookInfo,
    },
  };
};
