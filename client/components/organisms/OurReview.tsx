import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { Review } from '@components/molecules/Review';
import { getReviewBy } from 'client/util/api';
import { IReview } from 'interface/models/review';
import { useEffect, useState } from 'react';

const dummyReviews = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  '草',
  'とても自分好みの作品。話の立ち上がりから一気に話に引き込まれ、最後までたっぷり面白かった。個人的本屋大賞予想はこの作品です！とても自分好みの作品。話の立ち上がりから一気に話に引き込まれ、最後までたっぷり面白かった。個人的本屋大賞予想はこの作品です！とても自分好みの作品。話の立ち上がりから一気に話に引き込まれ、最後までたっぷり面白かった。個人的本屋大賞予想はこの作品です！とても自分好みの作品。話の立ち上がりから一気に話に引き込まれ、最後までたっぷり面白かった。個人的本屋大賞予想はこの作品です！とても自分好みの作品。話の立ち上がりから一気に話に引き込まれ、最後までたっぷり面白かった。個人的本屋大賞予想はこの作品です！',
  '最後のどんでん返しで思わず声が出てしまった。すごい作品',
];

export const OurReview = (props: { isbn: number }): JSX.Element => {
  const { isbn } = props;
  const [reviews, setReviews] = useState<IReview[] | undefined>();
  useEffect(() => {
    const getReview = async () => {
      const res = await getReviewBy(isbn);
      const reviews = res.data;
      setReviews(reviews);
    };
    getReview();
  });
  return (
    <Box>
      <Text mb={6} fontWeight='bold'>
        みんなの感想
      </Text>
      {reviews == null ? (
        <Center mt={16}>
          <Spinner />
        </Center>
      ) : (
        reviews.map((review, idx) => {
          return (
            <Box my={6} key={idx}>
              <Review review={review} />
            </Box>
          );
        })
      )}
    </Box>
  );
};
