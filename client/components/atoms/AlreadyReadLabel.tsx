import { Center, Text } from '@chakra-ui/react';
import { colors } from 'client/styles/colors';

export const AlreadyReadButton = (): JSX.Element => {
  return (
    <Center
      rounded={10}
      py={6}
      color='white'
      mx={{ base: '24px', md: 'auto' }}
      maxWidth={600}
      bg={colors.green}
    >
      <Text fontSize='lg' fontWeight='bold'>
        あなたはこの本を読んでいます
      </Text>
    </Center>
  );
};
