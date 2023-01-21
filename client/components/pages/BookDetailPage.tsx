import { Box } from '@chakra-ui/react';
import { AveragePoints } from '@components/organisms/AveragePoints';
import { BookInfoButtons } from '@components/organisms/BookDetailButtons';
import { BookInfo } from '@components/organisms/BookInfo';
import { OurReview } from '@components/organisms/OurReview';
import { IBookInfo } from 'interface/bookInfo';

export const BookDetailPage = (props: IBookInfo): JSX.Element => {
  return (
    <Box my={{ base: '16px', md: '24px' }} maxWidth={800} mx={{ base: '24px', md: 'auto' }}>
      <BookInfo {...props} />
      <BookInfoButtons {...props} />
      {/* <Box mt={12}>
        <AveragePoints />
      </Box> */}
      <Box mt={12}>
        <OurReview isbn={props.isbn} />
      </Box>
    </Box>
  );
};
