import { Box, Center, Spinner } from '@chakra-ui/react';
import { AlreadyReadButton } from '@components/atoms/AlreadyReadLabel';
import { RecordReadingButton } from '@components/atoms/RecordReadingButton';
import { ReviewButton } from '@components/atoms/ReviewButton';
import { useUserInfo } from 'client/hooks/useUserInfo';
import { getBookStatus } from 'client/util/api';
import { IBookInfo } from 'interface/bookInfo';
import { useCallback, useEffect, useState } from 'react';

type BookInfoButtonsProps = {
  isbn: number;
  isHistoryExist: boolean | undefined;
  isReviewExist: boolean | undefined;
  afterRequestHandler: () => void;
};

export const BookInfoButtons = (props: BookInfoButtonsProps): JSX.Element => {
  const { isbn, isHistoryExist, isReviewExist, afterRequestHandler } = props;
  const { isLogedIn } = useUserInfo();

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
          <AlreadyReadButton isbn={isbn} afterRequestHandler={afterRequestHandler} />
        </Box>
      )}

      {isHistoryExist && !isReviewExist && (
        <Box my={8}>
          <ReviewButton isbn={isbn} afterRequestHandler={afterRequestHandler} />
        </Box>
      )}

      {!isHistoryExist && (
        <Box my={8}>
          <RecordReadingButton isbn={isbn} afterRequestHandler={afterRequestHandler} />
        </Box>
      )}
    </Box>
  );
};
