import { Box, Flex } from '@chakra-ui/react';
import { ProfileImage } from '@components/molecules/Profile/ProfileImage';
import { ProfileInfo } from '@components/molecules/Profile/ProfileInfo';

export const Profile = (): JSX.Element => {
  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent='space-evenly'>
      <Box w={120} mx='auto'>
        <ProfileImage />
      </Box>

      <Box ml={{ base: '0px', md: '16px' }}>
        <ProfileInfo />
      </Box>
    </Flex>
  );
};
