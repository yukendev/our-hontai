import { Flex, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';

type BookCarouselTitleProps = {
  year: number;
};

export const BookCarouselTitle = (props: BookCarouselTitleProps): JSX.Element => {
  const { year } = props;

  return (
    <Flex my={3}>
      <Text fontSize='xl' fontWeight='bold'>{`${year}年ノミネート作品`}</Text>
      <Spacer />
      <Link href={`/nominated_books/${year}`}>全ての作品を見る</Link>
    </Flex>
  );
};
