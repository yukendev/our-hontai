import { Box } from '@chakra-ui/react';
import { AveragePoints } from '@components/organisms/AveragePoints';
import { BookInfoButtons } from '@components/organisms/BookDetailButtons';
import { BookInfo } from '@components/organisms/BookInfo';
import { Header } from '@components/organisms/Header';
import { OurReview } from '@components/organisms/OurReview';

export default function BookDetails() {
  return (
    <Box>
      <Header />
      <BookInfo />
      <BookInfoButtons />
      <AveragePoints />
      <OurReview />
    </Box>
  );
}
