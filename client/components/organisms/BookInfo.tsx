import { Box, Flex } from '@chakra-ui/react';
import { BookImage } from '@components/atoms/Bibliography/BookImage';
import { Bibliography } from '@components/molecules/Bibliography';

const dummyImageData = 'https://www.hanmoto.com/bd/img/9784041098790_600.jpg';

export const BookInfo = (): JSX.Element => {
  const title = '六人の嘘つきな大学生';
  const author = '浅倉秋成';
  const publisher = 'KADOKAWA';
  const outline =
    '成長著しいＩＴ企業「スピラリンクス」が初めて行う新卒採用。最終選考に残った六人の就活生に与えられた課題は、一カ月後までにチームを作り上げ、ディスカッションをするというものだった。全員で内定を得るため、波多野祥吾は五人の学生と交流を深めていくが、本番直前に課題の変更が通達される。それは、「六人の中から一人の内定者を決める」こと。仲間だったはずの六人は、ひとつの席を奪い合うライバルになった。内定を賭けた議論が進む中、六通の封筒が発見される。個人名が書かれた封筒を空けると「●●は人殺し」だという告発文が入っていた。彼ら六人の嘘と罪とは。そして「犯人」の目的とは――。';

  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }}>
      <Box w={300} mx='auto'>
        <BookImage src={dummyImageData} />
      </Box>
      <Box maxWidth={500} ml={{ base: '0px', md: '48px' }} mt={{ base: '24px', md: '0px' }}>
        <Bibliography title={title} author={author} publisher={publisher} outline={outline} />
      </Box>
    </Flex>
  );
};
