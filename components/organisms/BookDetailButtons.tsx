import { Box } from '@chakra-ui/react';
import { AlreadyReadButton } from '@components/atoms/AlreadyReadLabel';
import { RecordReadingButton } from '@components/atoms/RecordReadingButton';
import { ReviewButton } from '@components/atoms/ReviewButton';

export const BookInfoButtons = (): JSX.Element => {
  return (
    <Box>
      <Box my={8}>
        <AlreadyReadButton />
      </Box>
      <Box my={8}>
        <ReviewButton />
      </Box>
      {/* <Box my={8}>
        <RecordReadingButton />
      </Box> */}
    </Box>
  );
};
