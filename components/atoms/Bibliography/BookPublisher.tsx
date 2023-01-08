import { Text } from '@chakra-ui/react';

type BookPublisherProps = {
  publisher: string;
};

export const BookPublisher = (props: BookPublisherProps): JSX.Element => {
  const { publisher } = props;
  return <Text fontWeight='bold'>発行: {publisher}</Text>;
};
