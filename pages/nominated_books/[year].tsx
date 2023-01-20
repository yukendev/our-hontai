import { Box, Flex } from '@chakra-ui/react';
import { BookList } from '@components/organisms/BookList';
import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { IBook } from 'interface/models/book';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BookService } from 'server/services/book';

type PageProps = {
  year: number;
  books: IBook[];
};

export default function NominatedBooksPage(props: PageProps) {
  const { year, books } = props;
  return (
    <Flex flexDirection='column'>
      <Header />
      <Box my={16} flex={1}>
        <BookList year={year} books={books} />
      </Box>
      <Footer />
    </Flex>
  );
}

type PathParams = {
  year: string;
};

const years = [2022, 2021, 2020];

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const paths = years.map((year) => {
    return { params: { year: year.toString() } };
  });
  return {
    paths,
    fallback: false, // 上記以外のパスでアクセスした場合は 404 ページにする
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { year } = context.params as PathParams;

  const books = await BookService.getNominatedBooksByYear(Number(year));

  const props: PageProps = {
    year: Number(year),
    books,
  };

  const jsonData = JSON.parse(JSON.stringify(props));

  return { props: jsonData };
};
