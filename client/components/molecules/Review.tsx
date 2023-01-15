import { Box, Flex, Text } from '@chakra-ui/react';
import { IconImage } from '@components/atoms/IconImage';
import { IReview } from 'interface/models/review';
import { IUser } from 'interface/models/user';

type ReviewProps = {
  review: IReview;
};
export const Review = (props: ReviewProps): JSX.Element => {
  const { review } = props;
  const user = review.reviewer as unknown as IUser; // review取得時にpopulateされている
  return (
    <Flex>
      <IconImage src={user.image} size='40px' />
      <Text rounded={10} maxWidth={650} py={3} px={6} mx={6} bg='gray.100'>
        {review.content}
      </Text>
    </Flex>
  );
};
