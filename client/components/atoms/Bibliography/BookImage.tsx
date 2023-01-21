import { Image } from '@chakra-ui/react';

type BookImageProps = {
  src: string;
};

export const BookImage = (props: BookImageProps): JSX.Element => {
  const { src } = props;
  return <Image boxShadow='lg' src={src} alt='本の表紙画像' />;
};
