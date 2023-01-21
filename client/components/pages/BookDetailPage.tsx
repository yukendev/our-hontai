import { Box } from '@chakra-ui/react';
import { AveragePoints } from '@components/organisms/AveragePoints';
import { BookInfoButtons } from '@components/organisms/BookDetailButtons';
import { BookInfo } from '@components/organisms/BookInfo';
import { OurReview } from '@components/organisms/OurReview';
import { getBookStatus } from 'client/util/api';
import { IBookInfo } from 'interface/bookInfo';
import { useCallback, useEffect, useState } from 'react';

const useBookStatus = (isbn: number) => {
  const [isHistoryExist, setIsHistoryExist] = useState<boolean | undefined>();
  const [isReviewExist, setIsReviewExist] = useState<boolean | undefined>();

  const resetBookStatus = useCallback(async () => {
    setIsHistoryExist(undefined);
    setIsReviewExist(undefined);
    const bookStatus = await getBookStatus(isbn);
    setIsHistoryExist(bookStatus.data.isHistoryExist);
    setIsReviewExist(bookStatus.data.isReviewExist);
  }, [isbn]);

  useEffect(() => {
    resetBookStatus();
  }, [resetBookStatus]);

  return {
    isReviewExist,
    isHistoryExist,
    resetBookStatus,
  };
};

export const BookDetailPage = (props: IBookInfo): JSX.Element => {
  const { isHistoryExist, isReviewExist, resetBookStatus } = useBookStatus(props.isbn);

  return (
    <Box my={{ base: '16px', md: '24px' }} maxWidth={800} mx={{ base: '24px', md: 'auto' }}>
      <BookInfo {...props} />
      <BookInfoButtons
        isbn={props.isbn}
        isHistoryExist={isHistoryExist}
        isReviewExist={isReviewExist}
        resetBookStatus={resetBookStatus}
      />
      {/* <Box mt={12}>
        <AveragePoints />
      </Box> */}
      <Box mt={12}>
        <OurReview isbn={props.isbn} />
      </Box>
    </Box>
  );
};
