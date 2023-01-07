import { BookList } from '@components/organisms/BookList';
import { Header } from '@components/organisms/Header';

export default function NominatedBooks() {
  return (
    <>
      <Header />
      <BookList year={2022} />
    </>
  );
}
