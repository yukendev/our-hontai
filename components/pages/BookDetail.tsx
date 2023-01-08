import { Box } from '@chakra-ui/react';
import { AveragePoints } from '@components/organisms/AveragePoints';
import { BookInfoButtons } from '@components/organisms/BookDetailButtons';
import { BookInfo } from '@components/organisms/BookInfo';
import { Header } from '@components/organisms/Header';
import { OurReview } from '@components/organisms/OurReview';

export const BookDetail = (): JSX.Element => {
  return (
    <Box my={{ base: '16px', md: '24px' }} maxWidth={800} mx={{ base: '24px', md: 'auto' }}>
      <BookInfo />
      <BookInfoButtons />
      <Box mt={12}>
        <AveragePoints />
      </Box>
      <Box mt={12}>
        <OurReview />
      </Box>
    </Box>
  );
};
