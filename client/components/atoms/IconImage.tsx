import { Image, Img } from '@chakra-ui/react';
import DefaultIcon from '../../public/default_icon.png';

type IconImageProps = {
  size: string;
  src?: string;
};
export const IconImage = (props: IconImageProps): JSX.Element => {
  const { size, src } = props;
  // return <DefaultIcon rx={size / 2} ry={size / 2} width={size} height={size} />;
  return (
    <Image src='/default_icon.png' rounded='full' width={size} height={size} alt='icon image' />
  );
};
