import { Center, Text } from '@chakra-ui/react';

export const ReviewButton = (): JSX.Element => {
  return (
    <Center
      rounded={10}
      py={6}
      color='white'
      mx={{ base: '24px', md: 'auto' }}
      maxWidth={600}
      bg='myTheme.darkOrange'
      onClick={() => console.log('ほげ')}
    >
      <Text fontSize='lg' fontWeight='bold'>
        この本の評価・感想を書く
      </Text>
    </Center>
  );
};
