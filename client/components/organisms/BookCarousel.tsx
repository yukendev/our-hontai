import { Box } from '@chakra-ui/react';
import { BookItem } from '@components/atoms/BookItem';
import { BookCarouselTitle } from '@components/molecules/BookCarouselTitle';
import { IBook } from 'interface/models/book';
import Carousel from 'react-multi-carousel';

import styles from './BookCarousel.module.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

type BookCarouselProps = {
  year: number;
  books: IBook[];
};

export const BookCarousel = (props: BookCarouselProps): JSX.Element => {
  const { year, books } = props;

  return (
    <>
      <Box mt='50px' mx='auto' maxWidth={800}>
        <BookCarouselTitle year={year} />
        <Carousel
          containerClass={styles.bookCarousel}
          infinite={true}
          ssr={true}
          responsive={responsive}
        >
          {books.map((book, idx) => {
            return <BookItem key={idx} book={book} />;
          })}
        </Carousel>
      </Box>
    </>
  );
};
