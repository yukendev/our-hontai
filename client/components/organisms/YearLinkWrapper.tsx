import { Box, Text } from '@chakra-ui/react';
import { YearLinks } from '@components/molecules/YearLinks';

export const YearLinkWrapper = (): JSX.Element => {
  return (
    <>
      <Text ml={4} fontSize='xl' fontWeight='bold'>
        過去の本屋大賞をみる
      </Text>
      <Box my={4}>
        <YearLinks />
      </Box>
    </>
  );
};
