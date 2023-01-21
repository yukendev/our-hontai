import { Box, Flex, Text } from '@chakra-ui/react';
import { IconImage } from '@components/atoms/IconImage';
import { PointStar } from '@components/atoms/PointStar';
import { IReview } from 'interface/models/review';
import { IUser } from 'interface/models/user';

const EvaluateStars = (props: { point: number }): JSX.Element => {
  const { point } = props;
  const arr = [1, 2, 3, 4, 5];
  return (
    <Flex>
      {arr.map((num) => {
        const color = num <= point ? '#FFB26B' : '#c0c0c0';
        return <PointStar key={num} size={20} color={color} />;
      })}
    </Flex>
  );
};

type ReviewProps = {
  review: IReview;
};
export const Review = (props: ReviewProps): JSX.Element => {
  const { review } = props;
  const user = review.reviewer as unknown as IUser; // review取得時にpopulateされている
  return (
    <Flex>
      <IconImage src={user.image} size='40px' />
      <Box rounded={10} maxWidth={650} py={3} px={6} mx={6} bg='gray.50'>
        <EvaluateStars point={review.point} />
        <Box my={2}>
          <Text>{review.content}</Text>
        </Box>
      </Box>
    </Flex>
  );
};
