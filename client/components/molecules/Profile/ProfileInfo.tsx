import { Box, Text } from '@chakra-ui/react';
import { ProfileUserName } from './ProfileUserName';

export const ProfileInfo = (): JSX.Element => {
  return (
    <Box>
      <Text fontWeight='bold'>メールアドレス</Text>
      <Text mt={1}>hoge@hoge.com</Text>
      <Box mt={8}>
        <ProfileUserName />
      </Box>
    </Box>
  );
};
