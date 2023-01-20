import { Box, Center } from '@chakra-ui/react';
import Image from 'next/image';
import styles from './TopPageImage.module.scss';

export const TopPageImage = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgImageCaontainer}>
        <Image fill src='/book_background.jpg' alt={'Top画面背景'} />
      </div>
      <Center className={styles.titleImageContainer}>
        <Box rounded={20} p={{ base: 0, md: 8 }} bgColor='whiteAlpha.800'>
          <Image width={900} height={180} src='/title.png' alt={'タイトル画像'} />
        </Box>
      </Center>
    </div>
  );
};
