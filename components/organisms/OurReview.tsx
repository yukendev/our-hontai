import { Box, Text } from '@chakra-ui/react';
import { Review } from '@components/molecules/Review';

export const OurReview = (): JSX.Element => {
  return (
    <Box>
      <Text fontWeight='bold'>みんなの感想</Text>
      <Review />
    </Box>
  );
};
