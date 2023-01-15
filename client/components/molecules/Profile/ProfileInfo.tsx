import { Box, Text } from '@chakra-ui/react';
import { ProfileUserName } from './ProfileUserName';

export const ProfileInfo = (props: { email: string; username: string }): JSX.Element => {
  return (
    <Box>
      <Text fontWeight='bold'>メールアドレス</Text>
      <Text mt={1}>{props.email}</Text>
      <Box mt={8}>
        <ProfileUserName username={props.username} />
      </Box>
    </Box>
  );
};
