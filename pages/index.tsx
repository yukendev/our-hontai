import { NominatedBookListCarousel } from '@components/organisms/NominatedBookListCarousel';
import { Header } from '@components/organisms/Header';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  return (
    <>
      <Header />
      <NominatedBookListCarousel year={2022} />
      <NominatedBookListCarousel year={2021} />
      <NominatedBookListCarousel year={2020} />
    </>
  );
}
