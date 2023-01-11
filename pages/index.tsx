import { BookCarousel } from '@components/organisms/BookCarousel';
import { Header } from '@components/organisms/Header';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
  });
  return (
    <>
      <Header />
      <BookCarousel year={2022} />
      <BookCarousel year={2021} />
      <BookCarousel year={2020} />
    </>
  );
}
