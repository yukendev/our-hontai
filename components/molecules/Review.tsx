import { Flex, Text } from '@chakra-ui/react';
import { IconImage } from '@components/atoms/IconImage';

export const Review = (): JSX.Element => {
  return (
    <Flex>
      <IconImage size='40px' />
      <Text>コメント</Text>
    </Flex>
  );
};
