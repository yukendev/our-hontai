import { Box } from '@chakra-ui/react';
import { BookItem } from '@components/atoms/BookItem';
import { NominatedBookListTitle } from '@components/molecules/NominatedBookListTitle';
import Carousel from 'react-multi-carousel';

// 開発用のダミーデータ
const dummyBookImgSrc = [
  'https://www.hanmoto.com/bd/img/9784103330639_600.jpg',
  'https://www.hanmoto.com/bd/img/9784065222690_600.jpg',
  'https://www.hanmoto.com/bd/img/9784041113936_600.jpg',
  'https://www.hanmoto.com/bd/img/9784575244649_600.jpg',
  'https://www.hanmoto.com/bd/img/9784408537870_600.jpg',
  'https://www.hanmoto.com/bd/img/9784120054730_600.jpg',
  'https://www.hanmoto.com/bd/img/9784569850641_600.jpg',
  'https://www.hanmoto.com/bd/img/9784152100641_600.jpg',
  'https://www.hanmoto.com/bd/img/9784103070436_600.jpg',
  'https://www.hanmoto.com/bd/img/9784041098790_600.jpg',
];

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

type NominatedBookListCarouselProps = {
  year: number;
};

export const NominatedBookListCarousel = (props: NominatedBookListCarouselProps): JSX.Element => {
  const { year } = props;

  return (
    <>
      <Box mt='50px' mx='auto' maxWidth={800}>
        <NominatedBookListTitle year={year} />
        <Carousel infinite={true} ssr={true} responsive={responsive}>
          {dummyBookImgSrc.map((src, idx) => (
            <BookItem key={idx} src={src} />
          ))}
        </Carousel>
      </Box>
    </>
  );
};
