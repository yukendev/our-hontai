import { Box, Flex } from '@chakra-ui/react';
import { BookImage } from '@components/atoms/Bibliography/BookImage';
import { Bibliography } from '@components/molecules/Bibliography';
import { IBookInfo } from 'interface/bookInfo';

export const BookInfo = (props: IBookInfo): JSX.Element => {
  const { title, author, publisher, outline, image, isbn } = props;

  return (
    <Flex
      mt={{ base: 8, md: 24 }}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'normal' }}
    >
      <Box w={200} mx='auto'>
        <BookImage src={image} />
      </Box>
      <Box maxWidth={500} ml={{ base: '0px', md: '24px' }} mt={{ base: '24px', md: '0px' }}>
        <Bibliography
          isbn={isbn}
          title={title}
          author={author}
          publisher={publisher}
          outline={outline}
        />
      </Box>
    </Flex>
  );
};
