import { DeleteIcon } from '@chakra-ui/icons';
import { IconImage } from '@components/atoms/IconImage';
import { PointStar } from '@components/atoms/PointStar';
import { colors } from 'client/styles/colors';
import { IReview } from 'interface/models/review';
import { IUser } from 'interface/models/user';
import { withId } from 'interface/withId';
import { Box, Flex, Spacer, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { deleteReview } from 'client/util/api';
import { useMyToaster } from 'client/util/toaster';

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
        <MenuItem>
          <button onClick={deleteHandler}>削除</button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

type ReviewProps = {
  isbn: number;
  review: IReview;
};

export const Review = (props: ReviewProps): JSX.Element => {
  const { isbn, review } = props;
  const { showToaster } = useMyToaster();
  const user = review.reviewer as unknown as IUser & withId; // review取得時にpopulateされている
  const isMyReview = user._id === review.reviewer._id.toString();

  const deleteHandler = async () => {
    try {
      await deleteReview(isbn);
      showToaster('success', '感想を削除しました');
    } catch {
      showToaster('error', '感想を削除できませんでした');
    }
  };

  return (
    <Flex>
      <IconImage src={user.image} size='40px' />
      <Box rounded={10} maxWidth={650} py={3} px={6} mx={6} bg='gray.50'>
        <Flex>
          <EvaluateStars point={review.point} />
          <Spacer />
          {isMyReview && <TrashIcon deleteHandler={deleteHandler} />}
        </Flex>
        <Box my={2}>
          <Text>{review.content}</Text>
        </Box>
      </Box>
    </Flex>
  );
};
