import { Flex, Image } from '@chakra-ui/react';

export const BookItem = (props: any): JSX.Element => {
  const { src } = props;

  return (
    <Flex
      mx='auto'
      justifyContent='center'
      alignItems='center'
      rounded='md'
      bg='gray.200'
      height={230}
      width={160}
      boxShadow='lg'
    >
      <Image htmlWidth='120px' src={src} alt='表紙画像' />
    </Flex>
  );
};
