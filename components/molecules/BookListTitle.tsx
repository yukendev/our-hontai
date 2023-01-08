import { Text } from '@chakra-ui/react';

type BookListTitleProps = {
  year: number;
};

export const BookListTitle = (props: BookListTitleProps): JSX.Element => {
  const { year } = props;
  return <Text fontSize='2xl' fontWeight='bold'>{`${year}年のノミネート作品`}</Text>;
};
