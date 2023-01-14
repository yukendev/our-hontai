import { Flex, Image } from '@chakra-ui/react';
import { IBook } from 'interface/models/book';
import Link from 'next/link';
export const BookItem = (props: { book: IBook }): JSX.Element => {
  const { book } = props;

  return (
    <Link href={`/book_detail?isbn=${book.isbn}`}>
      <Flex
        mx='auto'
        justifyContent='center'
        alignItems='center'
        rounded='md'
        bg='gray.200'
        height={230}
        width={160}
        boxShadow='lg'
      >
        <Image htmlWidth='120px' src={book.image} alt='表紙画像' />
      </Flex>
    </Link>
  );
};
