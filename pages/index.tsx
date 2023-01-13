import { BookCarousel } from '@components/organisms/BookCarousel';
import { Header } from '@components/organisms/Header';
import { IBook } from 'interface/models/book';
import { GetStaticProps } from 'next';
import 'react-multi-carousel/lib/styles.css';
import { BookService } from 'server/services/book';

type Props = { books: { [key: string]: IBook[] } };

export default function Home(props: Props) {
  const { books } = props;
  const years = Object.keys(books);
  return (
    <>
      <Header />
      {years.map((year) => {
        const nominatedBooks = books[year];
        return <BookCarousel key={year} year={Number(year)} books={nominatedBooks} />;
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // TOPページで掲載する年
  const years = ['2020', '2021', '2022'];

  let books = {};

  try {
    // 指定された年の本の情報を一気に取得
    const result = await Promise.all(
      years.map((year) => {
        return BookService.getNominatedBooksByYear(Number(year));
      }),
    );

    // 指定された年をkeyに本の情報の配列をObjectにした後、propsにマージする
    years.forEach((year, idx) => {
      const obj = {
        [year]: result[idx],
      };
      Object.assign(books, obj);
    });
  } catch (err) {
    console.log(err);
  }

  const jsonData = JSON.parse(JSON.stringify(books));

  return {
    props: {
      books: jsonData,
    },
  };
};
