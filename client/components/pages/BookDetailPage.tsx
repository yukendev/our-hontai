import { Box } from '@chakra-ui/react';
import { BookInfoButtons } from '@components/organisms/BookDetailButtons';
import { BookInfo } from '@components/organisms/BookInfo';
import { OurReview } from '@components/organisms/OurReview';
import { useUserInfo } from 'client/hooks/useUserInfo';
import { deleteReview, getBookStatus, getReviewByPage } from 'client/util/api';
import { IBookInfo } from 'interface/bookInfo';
import { IReview } from 'interface/models/review';
import { useCallback, useEffect, useState } from 'react';

const useBookStatus = (isbn: number) => {
  const [isHistoryExist, setIsHistoryExist] = useState<boolean | undefined>();
  const [isReviewExist, setIsReviewExist] = useState<boolean | undefined>();
  const { isLogedIn } = useUserInfo();

  const resetBookStatus = useCallback(async () => {
    setIsHistoryExist(undefined);
    setIsReviewExist(undefined);
    const bookStatus = await getBookStatus(isbn);
    setIsHistoryExist(bookStatus.data.isHistoryExist);
    setIsReviewExist(bookStatus.data.isReviewExist);
  }, [isbn]);

  useEffect(() => {
    if (isLogedIn) {
      resetBookStatus();
    } else {
      setIsHistoryExist(false);
      setIsReviewExist(false);
    }
  }, [isLogedIn, resetBookStatus]);

  return {
    isReviewExist,
    isHistoryExist,
    resetBookStatus,
  };
};

export const BookDetailPage = (props: IBookInfo): JSX.Element => {
  const { isbn } = props;
  const { isHistoryExist, isReviewExist, resetBookStatus } = useBookStatus(isbn);

  const [reviews, setReviews] = useState<IReview[] | undefined>();
  const [hasMore, setHasMore] = useState(true); //再読み込み判定

  const loadReviews = useCallback(
    async (page: number) => {
      const res = await getReviewByPage(isbn, page);
      const fetchedReviews = res.data;
      if (page === 1 && fetchedReviews.length < 1) {
        // まだ感想がない
        setReviews([]);
      }
      if (fetchedReviews.length < 1) {
        setHasMore(false);
        return;
      }
      setReviews([...(reviews ?? []), ...fetchedReviews]);
    },
    [isbn, reviews],
  );

  const deleteReviewHandler = useCallback(async () => {
    try {
      await deleteReview(isbn);
      loadReviews(1);
      resetBookStatus();
    } catch {
      throw Error();
    }
  }, [isbn, loadReviews, resetBookStatus]);

  const afterRequestHandler = useCallback(() => {
    resetBookStatus();
    loadReviews(1);
  }, [loadReviews, resetBookStatus]);

  return (
    <Box my={{ base: '16px', md: '24px' }} maxWidth={800} mx={{ base: '24px', md: 'auto' }}>
      <BookInfo {...props} />
      <BookInfoButtons
        bookInfo={props}
        isHistoryExist={isHistoryExist}
        isReviewExist={isReviewExist}
        afterRequestHandler={afterRequestHandler}
      />
      {/* <Box mt={12}>
        <AveragePoints />
      </Box> */}
      <Box mt={12}>
        <OurReview
          loadFunc={loadReviews}
          hasMore={hasMore}
          reviews={reviews}
          deleteReviewHandler={deleteReviewHandler}
        />
      </Box>
    </Box>
  );
};
