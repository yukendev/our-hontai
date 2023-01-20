import Link from 'next/link';

export const YearLink = (props: { year: number }): JSX.Element => {
  const { year } = props;
  return <Link href={`/nominated_books/${year}`}>{year}年</Link>;
};
