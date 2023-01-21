import { Box, Flex } from '@chakra-ui/react';
import { BookCarousel } from '@components/organisms/BookCarousel';
import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { TopInfoLabel } from '@components/organisms/TopInfoLabel';
import { TopPageImage } from '@components/organisms/TopPageImage';
import { YearLinkWrapper } from '@components/organisms/YearLinkWrapper';
import { colors } from 'client/styles/colors';
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
