import { Image, Img } from '@chakra-ui/react';
import DefaultIcon from 'public/default_icon.png';

type IconImageProps = {
  size: string;
  src?: string;
};
export const IconImage = (props: IconImageProps): JSX.Element => {
  const { size, src } = props;
  return (
    <Image
      crossOrigin='anonymous'
      src={src}
      rounded='full'
      width={size}
      height={size}
      alt='icon image'
    />
  );
};
