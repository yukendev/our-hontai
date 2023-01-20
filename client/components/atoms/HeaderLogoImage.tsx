import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from 'public/logo.png';

export const HeaderLogoImage = (): JSX.Element => {
  return (
    <Box my='auto' ml={3}>
      <Link href='/'>
        <Image height={60} src={logoImg} alt={'ロゴ画像'} />
      </Link>
    </Box>
  );
};
