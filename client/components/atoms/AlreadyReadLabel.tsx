import { Center, Text } from '@chakra-ui/react';

export const AlreadyReadButton = (): JSX.Element => {
  return (
    <Center
      rounded={10}
      py={6}
      color='white'
      mx={{ base: '24px', md: 'auto' }}
      maxWidth={600}
      bg='myTheme.green'
    >
      <Text fontSize='lg' fontWeight='bold'>
        あなたはこの本を読んでいます
      </Text>
    </Center>
  );
};
