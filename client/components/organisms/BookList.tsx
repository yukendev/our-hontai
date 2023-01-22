import { Box, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { BookItem } from '@components/atoms/BookItem';
import { BookListTitle } from '@components/molecules/BookListTitle';
import { IBook } from 'interface/models/book';
type BookListProps = {
  year: number;
  books: IBook[];
};

export const BookList = (props: BookListProps): JSX.Element => {
  const { year, books } = props;

  return (
    <Flex justify='center'>
      <Box>
        <Box my={10} textAlign='center'>
          <BookListTitle year={year} />
        </Box>
        <Wrap justify='center' spacing='30px' maxWidth={950}>
          {books.map((book, idx) => {
            return (
              <WrapItem key={idx}>
                <BookItem book={book} />
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </Flex>
  );
};
