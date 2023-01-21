import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { Review } from '@components/molecules/Review';
import { useMyToaster } from 'client/util/toaster';
import { IReview } from 'interface/models/review';

import InfiniteScroll from 'react-infinite-scroller';

type OurReviewProps = {
  loadFunc: (page: number) => Promise<void>;
  hasMore: boolean;
  reviews: IReview[] | undefined;
  deleteReviewHandler: () => Promise<void>;
};

export const OurReview = (props: OurReviewProps): JSX.Element => {
  const { loadFunc, hasMore, reviews, deleteReviewHandler } = props;
  const { showToaster } = useMyToaster();

  const deleteHandler = async () => {
    try {
      await deleteReviewHandler();
      showToaster('success', '感想を削除しました');
    } catch {
      showToaster('error', '感想を削除できませんでした');
    }
  };

  return (
    <Box mb={16}>
      <Text mb={6} fontWeight='bold'>
        みんなの感想
      </Text>
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
                <Review deleteHandler={deleteHandler} review={review} />
              </Box>
            );
          })
        )}
      </InfiniteScroll>
    </Box>
  );
};
