import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { Review } from '@components/molecules/Review';
import { getReviewByPage } from 'client/util/api';
import { IReview } from 'interface/models/review';
import { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroller';

export const OurReview = (props: { isbn: number }): JSX.Element => {
  const { isbn } = props;
  const [reviews, setReviews] = useState<IReview[] | undefined>();
  const [hasMore, setHasMore] = useState(true); //再読み込み判定
  const [hasNoReview, setHasNoReview] = useState(false);

  const loadFunc = async (page: number) => {
    const res = await getReviewByPage(isbn, page);
    const fetchedReviews = res.data;
    if (page === 1 && fetchedReviews.length < 1) {
      // まだ感想がない
      setReviews([]);
      setHasNoReview(true);
    }
    if (fetchedReviews.length < 1) {
      setHasMore(false);
      return;
    }
    setReviews([...(reviews ?? []), ...fetchedReviews]);
  };

  return (
    <Box>
      <Text mb={6} fontWeight='bold'>
        みんなの感想
      </Text>
      {hasNoReview && (
        <Center my={16}>
          <Text>まだ感想が投稿されていません。よかったら感想を書いてみてください！</Text>
        </Center>
      )}
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasMore}
        loader={
          <Center mt={16}>
            <Spinner />
          </Center>
        }
      >
        {reviews == null ? (
          <Center mt={16}>
            <Spinner />
          </Center>
        ) : (
          reviews.map((review, idx) => {
            return (
              <Box my={6} key={idx}>
                <Review isbn={isbn} review={review} />
              </Box>
            );
          })
        )}
      </InfiniteScroll>
    </Box>
  );
};
