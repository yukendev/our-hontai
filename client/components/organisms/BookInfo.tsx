import { Box, Flex } from '@chakra-ui/react';
import { BookImage } from '@components/atoms/Bibliography/BookImage';
import { Bibliography } from '@components/molecules/Bibliography';
import { IBookInfo } from 'interface/bookInfo';

export const BookInfo = (props: IBookInfo): JSX.Element => {
  const { title, author, publisher, outline, image } = props;

  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }}>
      <Box w={300} mx='auto'>
        <BookImage src={image} />
      </Box>
      <Box maxWidth={500} ml={{ base: '0px', md: '48px' }} mt={{ base: '24px', md: '0px' }}>
        <Bibliography title={title} author={author} publisher={publisher} outline={outline} />
      </Box>
    </Flex>
  );
};
