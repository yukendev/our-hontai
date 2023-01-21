import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { Review } from '@components/molecules/Review';
import { getReviewBy } from 'client/util/api';
import { IReview } from 'interface/models/review';
import { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroller';

export const OurReview = (props: { isbn: number }): JSX.Element => {
  const { isbn } = props;
  const [reviews, setReviews] = useState<IReview[] | undefined>();
  // useEffect(() => {
  //   const getReview = async () => {
  //     const res = await getReviewBy(isbn);
  //     const reviews = res.data;
  //     setReviews(reviews);
  //   };
  //   getReview();
  // });
  const loadFunc = async (page: number) => {
    const res = await getReviewBy(isbn, page);
    const fetchedReviews = res.data;
    setReviews([...(reviews ?? []), ...fetchedReviews]);
  };
  return (
    <Box>
      <Text mb={6} fontWeight='bold'>
        みんなの感想
      </Text>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={
          <div className='loader' key={0}>
            Loading ...
          </div>
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
                <Review review={review} />
              </Box>
            );
          })
        )}
      </InfiniteScroll>
      {/* {reviews == null ? (
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
      )} */}
    </Box>
  );
};
