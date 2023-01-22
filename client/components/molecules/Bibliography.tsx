import { Box, Link } from '@chakra-ui/react';
import { BookAuthor } from '@components/atoms/Bibliography/BookAuthor';
import { BookOutline } from '@components/atoms/Bibliography/BookOutline';
import { BookPublisher } from '@components/atoms/Bibliography/BookPublisher';
import { BookTitle } from '@components/atoms/Bibliography/BookTitle';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type BibliographyProps = {
  isbn: number;
  title: string; // 本のタイトル
  author: string; // 作者
  publisher: string; // 出版社
  outline: string | null; // あらすじ
};

export const Bibliography = (props: BibliographyProps) => {
  const { title, author, publisher, outline, isbn } = props;
  return (
    <Box boxShadow='lg' rounded={8} p={8} bg='white'>
      <BookTitle title={title} />
      <Box mt='3'>
        <BookAuthor author={author} />
      </Box>
      <Box mt='3'>
        <BookPublisher publisher={publisher} />
      </Box>
      <Box mt='3'>
        <BookOutline outline={outline} />
      </Box>
      <Box mt='5'>
        <Link href={`https://www.hanmoto.com/bd/isbn/${isbn}`} color='blue' isExternal>
          詳細を見る
          <ExternalLinkIcon mx='2px' />
        </Link>
      </Box>
    </Box>
  );
};
