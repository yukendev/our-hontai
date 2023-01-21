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
        bg='gray.50'
        height={230}
        width={160}
        boxShadow='lg'
        position='relative'
      >
        {book.isGrandPrize && (
          <Image
            top={0}
            left={0}
            position='absolute'
            htmlWidth='50px'
            src='/prize.png'
            alt='大賞アイコン'
          />
        )}

        <Image htmlWidth='120px' src={book.image} alt='表紙画像' />
      </Flex>
    </Link>
  );
};
