import { Text } from '@chakra-ui/react';

type BookAuthorProps = {
  author: string;
};

export const BookAuthor = (props: BookAuthorProps): JSX.Element => {
  const { author } = props;
  return <Text fontWeight='bold'>{author}</Text>;
};
