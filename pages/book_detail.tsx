import { Box } from '@chakra-ui/react';
import { BookInfoButtons } from '@components/organisms/BookDetailButtons';
import { BookInfo } from '@components/organisms/BookInfo';
import { Header } from '@components/organisms/Header';

export default function BookDetails() {
  return (
    <Box>
      <Header />
      <BookInfo />
      <BookInfoButtons />
    </Box>
  );
}
