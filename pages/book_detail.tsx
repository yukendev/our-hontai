import { Box } from '@chakra-ui/react';
import { AveragePoints } from '@components/organisms/AveragePoints';
import { BookInfoButtons } from '@components/organisms/BookDetailButtons';
import { BookInfo } from '@components/organisms/BookInfo';
import { Header } from '@components/organisms/Header';
import { OurReview } from '@components/organisms/OurReview';
import { BookDetailPage } from '@components/pages/BookDetailPage';

export default function BookDetailsPage() {
  return (
    <Box>
      <Header />
      <BookDetailPage />
    </Box>
  );
}
