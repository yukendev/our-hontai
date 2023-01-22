import { Box, Text } from '@chakra-ui/react';
import { YearLinks } from '@components/molecules/YearLinks';

export const YearLinkWrapper = (): JSX.Element => {
  return (
    <>
      <Text ml={4} fontSize='xl' fontWeight='bold'>
        過去の本屋大賞をみる
      </Text>
      <Box
        rounded={8}
        py={8}
        px='8px'
        bg='white'
        my={4}
        w={{ base: '340px', md: '448px', lg: '680px' }}
      >
        <YearLinks />
      </Box>
    </>
  );
};
