import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import titleImg from 'public/title.png';

export const HeaderLogoImage = (): JSX.Element => {
  return (
    <Box my='auto' ml={3}>
      <Link href='/'>
        <Image height={80} src={titleImg} alt={'ロゴ画像'} />
      </Link>
    </Box>
  );
};
