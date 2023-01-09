import { Box, Link } from '@chakra-ui/react';
import { BookAuthor } from '@components/atoms/Bibliography/BookAuthor';
import { BookOutline } from '@components/atoms/Bibliography/BookOutline';
import { BookPublisher } from '@components/atoms/Bibliography/BookPublisher';
import { BookTitle } from '@components/atoms/Bibliography/BookTitle';

type BibliographyProps = {
  title: string; // 本のタイトル
  author: string; // 作者
  publisher: string; // 出版社
  outline: string; // あらすじ
};

export const Bibliography = (props: BibliographyProps) => {
  const { title, author, publisher, outline } = props;
  return (
    <Box>
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
        <Link color='blue'>詳細を見る</Link>
      </Box>
    </Box>
  );
};
