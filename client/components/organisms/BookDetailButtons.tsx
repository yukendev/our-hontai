import { Box, Center, Spinner } from '@chakra-ui/react';
import { AlreadyReadButton } from '@components/atoms/AlreadyReadButton';
import { RecordReadingButton } from '@components/atoms/RecordReadingButton';
import { ReviewButton } from '@components/atoms/ReviewButton';
import { useUserInfo } from 'client/hooks/useUserInfo';
import { getBookStatus } from 'client/util/api';
import { IBookInfo } from 'interface/bookInfo';
import { useCallback, useEffect, useState } from 'react';

type BookInfoButtonsProps = {
  bookInfo: IBookInfo;
  isHistoryExist: boolean | undefined;
  isReviewExist: boolean | undefined;
  afterRequestHandler: () => void;
};

export const BookInfoButtons = (props: BookInfoButtonsProps): JSX.Element => {
  const { bookInfo, isHistoryExist, isReviewExist, afterRequestHandler } = props;
  const { isLogedIn } = useUserInfo();

  if (!isLogedIn) {
    return <></>;
  }

  if (isHistoryExist == null || isReviewExist == null) {
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
          <AlreadyReadButton isbn={bookInfo.isbn} afterRequestHandler={afterRequestHandler} />
        </Box>
      )}

      {isHistoryExist && !isReviewExist && (
        <Box my={8}>
          <ReviewButton bookInfo={bookInfo} afterRequestHandler={afterRequestHandler} />
        </Box>
      )}

      {!isHistoryExist && (
        <Box my={8}>
          <RecordReadingButton isbn={bookInfo.isbn} afterRequestHandler={afterRequestHandler} />
        </Box>
      )}
    </Box>
  );
};
