import { BookCarousel } from '@components/organisms/BookCarousel';
import { Header } from '@components/organisms/Header';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  return (
    <>
      <Header />
      <BookCarousel year={2022} />
      <BookCarousel year={2021} />
      <BookCarousel year={2020} />
    </>
  );
}
