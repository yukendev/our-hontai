import { DeleteIcon } from '@chakra-ui/icons';
import { IconImage } from '@components/atoms/IconImage';
import { PointStar } from '@components/atoms/PointStar';
import { colors } from 'client/styles/colors';
import { IReview } from 'interface/models/review';
import { IUser } from 'interface/models/user';
import { withId } from 'interface/withId';
import { Box, Flex, Spacer, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useUserInfo } from 'client/hooks/useUserInfo';
const EvaluateStars = (props: { point: number }): JSX.Element => {
  const { point } = props;
  const arr = [1, 2, 3, 4, 5];
  return (
    <Flex>
      {arr.map((num) => {
        const color = num <= point ? colors.orange : '#c0c0c0';
        return <PointStar key={num} size={20} color={color} />;
      })}
    </Flex>
  );
};

const TrashIcon = (props: { deleteHandler: () => void }): JSX.Element => {
  const { deleteHandler } = props;
  return (
    <Menu autoSelect={false}>
      <MenuButton>
        <DeleteIcon cursor='pointer' />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={deleteHandler}>削除</MenuItem>
      </MenuList>
    </Menu>
  );
};

type ReviewProps = {
  deleteHandler: () => void;
  review: IReview;
};

export const Review = (props: ReviewProps): JSX.Element => {
  const { deleteHandler, review } = props;
  const { user } = useUserInfo();

  const reviewer = review.reviewer as unknown as IUser & withId; // review取得時にpopulateされている
  const isMyReview = user?._id === review.reviewer._id.toString();

  return (
    <Flex>
      <IconImage src={reviewer.image} size='40px' />
      <Box
        rounded={10}
        minWidth={{ base: 200, md: 300 }}
        maxWidth={650}
        py={3}
        px={6}
        mx={6}
        bg='gray.50'
      >
        <Flex>
          <EvaluateStars point={review.point} />
          <Spacer />
          {isMyReview && <TrashIcon deleteHandler={deleteHandler} />}
        </Flex>
        {review.content !== null && (
          <Box my={2}>
            <Text>{review.content}</Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
