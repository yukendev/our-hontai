import { Box, Flex, Text } from '@chakra-ui/react';
import { IconImage } from '@components/atoms/IconImage';

type ReviewProps = {
  content: string;
};
export const Review = (props: ReviewProps): JSX.Element => {
  const { content } = props;
  return (
    <Flex>
      <IconImage size='40px' />
      <Text rounded={10} maxWidth={650} py={3} px={6} mx={6} bg='gray.100'>
        {content}
      </Text>
    </Flex>
  );
};
