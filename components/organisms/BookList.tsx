import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import { BookItem } from '@components/atoms/BookItem';
import { BookListTitle } from '@components/molecules/BookListTitle';

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

type BookListProps = {
  year: number;
};

export const BookList = (props: BookListProps): JSX.Element => {
  const { year } = props;

  return (
    <Box mx='auto'>
      <Box mx='auto'>
        <BookListTitle year={year} />
      </Box>
      <Wrap mx='auto' spacing='30px' w={{ base: '320px', md: '480px', lg: '640px' }}>
        {dummyBookImgSrc.map((src, idx) => {
          return (
            <WrapItem key={idx}>
              <BookItem src={src} />
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};
