import Link from 'next/link';
import { Text } from '@chakra-ui/react';

export const YearLink = (props: { year: number }): JSX.Element => {
  const { year } = props;
  return (
    <Link href={`/nominated_books/${year}`}>
      <Text fontWeight='bold'>{year}年</Text>
    </Link>
  );
};
