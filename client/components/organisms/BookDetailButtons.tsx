import { Box } from '@chakra-ui/react';
import { AlreadyReadButton } from '@components/atoms/AlreadyReadLabel';
import { RecordReadingButton } from '@components/atoms/RecordReadingButton';
import { ReviewButton } from '@components/atoms/ReviewButton';
import { useUserInfo } from 'client/hooks/useUserInfo';
import { IBookInfo } from 'interface/bookInfo';
import { useEffect } from 'react';

export const BookInfoButtons = (props: IBookInfo): JSX.Element => {
  const { isLogedIn, user } = useUserInfo();
  useEffect(() => {});
  if (!isLogedIn) {
    return <></>;
  }
  return (
    <Box>
      <Box my={8}>
        <AlreadyReadButton />
      </Box>
      <Box my={8}>
        <ReviewButton />
      </Box>
      <Box my={8}>
        <RecordReadingButton isbn={props.isbn} />
      </Box>
    </Box>
  );
};
