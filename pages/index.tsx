import { Box, Flex } from '@chakra-ui/react';
import { BookCarousel } from '@components/organisms/BookCarousel';
import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { TopInfoLabel } from '@components/organisms/TopInfoLabel';
import { TopPageImage } from '@components/organisms/TopPageImage';
import { YearLinkWrapper } from '@components/organisms/YearLinkWrapper';
import { IBook } from 'interface/models/book';
import { GetStaticProps } from 'next';
import 'react-multi-carousel/lib/styles.css';
import { BookService } from 'server/services/book';
import { setupMongo } from 'server/utils/mongoose';

type Props = { books: { [key: string]: IBook[] } };

export default function Home(props: Props) {
  const { books } = props;
  const years = Object.keys(books).reverse();
  return (
    <Flex flexDirection='column'>
      <Header />
      <TopPageImage />
      <Box flex={1} my={{ base: 8, md: 16 }}>
        <Box mx={2}>
          <TopInfoLabel />
        </Box>

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
  // mongoを初期化
  await setupMongo();

  // TOPページで掲載する年
  const years = ['2023', '2022', '2021'];

  // 表示する本
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
    console.log('err', err);
  }

  const jsonData = JSON.parse(JSON.stringify(books));

  return {
    props: {
      books: jsonData,
    },
  };
};
