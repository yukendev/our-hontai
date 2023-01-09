import { Box, Text } from '@chakra-ui/react';
import { Profile } from '@components/organisms/Profile';

export const ProfilePage = (): JSX.Element => {
  return (
    <Box my={{ base: '16px', md: '24px' }} maxWidth={600} mx={{ base: '24px', md: 'auto' }}>
      <Text fontWeight='bold' fontSize='xl'>
        プロフィール
      </Text>
      <Box mt={8}>
        <Profile />
      </Box>
    </Box>
  );
};
