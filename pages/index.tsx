import { Box, Flex } from '@chakra-ui/react';
import { BookCarousel } from '@components/organisms/BookCarousel';
import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { TopPageImage } from '@components/organisms/TopPageImage';
import { YearLinkWrapper } from '@components/organisms/YearLinkWrapper';
import { IBook } from 'interface/models/book';
import { GetStaticProps } from 'next';
import 'react-multi-carousel/lib/styles.css';
import { BookService } from 'server/services/book';

type Props = { books: { [key: string]: IBook[] } };

export default function Home(props: Props) {
  const { books } = props;
  const years = Object.keys(books);
  return (
    <Flex flexDirection='column'>
      <Header />
      <TopPageImage />
      <Box flex={1} my={{ base: 8, md: 16 }}>
        {years.map((year) => {
          const nominatedBooks = books[year];
          return <BookCarousel key={year} year={Number(year)} books={nominatedBooks} />;
        })}
      </Box>
      <Box mb={16} mx='auto'>
        <YearLinkWrapper />
      </Box>
      <Footer />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // TOPページで掲載する年
  const years = ['2022', '2021', '2020'];

  let books = {};

  try {
    // 指定された年の本の情報を一気に取得
    const result = await Promise.all(
      years.map((year) => {
        return BookService.getNominatedBooksByYear(Number(year));
      }),
    );

    // 指定された年をkeyに本の情報の配列をObjectにした後、propsにマージする
    years.forEach((year, idx) => {
      const obj = {
        [year]: result[idx],
      };
      Object.assign(books, obj);
    });
  } catch (err) {
    console.log(err);
  }

  const jsonData = JSON.parse(JSON.stringify(books));

  return {
    props: {
      books: jsonData,
    },
  };
};
