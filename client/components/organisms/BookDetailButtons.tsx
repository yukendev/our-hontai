import { Box, Center, Spinner } from '@chakra-ui/react';
import { AlreadyReadButton } from '@components/atoms/AlreadyReadLabel';
import { RecordReadingButton } from '@components/atoms/RecordReadingButton';
import { ReviewButton } from '@components/atoms/ReviewButton';
import { useUserInfo } from 'client/hooks/useUserInfo';
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

export const BookInfoButtons = (props: IBookInfo): JSX.Element => {
  const { isLogedIn, user } = useUserInfo();
  const { isHistoryExist, isReviewExist, resetBookStatus } = useBookStatus(props.isbn);

  const afterRequestHandler = useCallback(() => {
    resetBookStatus();
  }, [resetBookStatus]);

  useEffect(() => {});
  if (!isLogedIn || isHistoryExist == null || isReviewExist == null) {
    return (
      <Center mt={16}>
        <Spinner />
      </Center>
    );
  }

  return (
    <Box>
      {isHistoryExist && (
        <Box my={8}>
          <AlreadyReadButton />
        </Box>
      )}

      {isHistoryExist && !isReviewExist && (
        <Box my={8}>
          <ReviewButton />
        </Box>
      )}

      {!isHistoryExist && (
        <Box my={8}>
          <RecordReadingButton isbn={props.isbn} afterRequestHandler={afterRequestHandler} />
        </Box>
      )}
    </Box>
  );
};
