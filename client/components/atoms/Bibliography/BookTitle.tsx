import { Text } from '@chakra-ui/react';

type BookTitleProps = {
  title: string;
};
export const BookTitle = (props: BookTitleProps): JSX.Element => {
  const { title } = props;
  return (
    <Text fontWeight='bold' fontSize='2xl'>
      {title}
    </Text>
  );
};
