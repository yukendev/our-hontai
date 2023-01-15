import { Box, Flex } from '@chakra-ui/react';
import { ProfileImage } from '@components/molecules/Profile/ProfileImage';
import { ProfileInfo } from '@components/molecules/Profile/ProfileInfo';
import { IUser } from 'interface/models/user';

export const Profile = (props: IUser): JSX.Element => {
  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent='space-evenly'>
      <Box w={120} mx='auto'>
        <ProfileImage src={props.image} />
      </Box>

      <Box ml={{ base: '0px', md: '16px' }}>
        <ProfileInfo email={props.email} username={props.username} />
      </Box>
    </Flex>
  );
};
