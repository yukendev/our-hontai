import { Text } from '@chakra-ui/react';

type BookOutlineProps = {
  outline: string;
};

export const BookOutline = (props: BookOutlineProps): JSX.Element => {
  const { outline } = props;
  return <Text>{outline}</Text>;
};
