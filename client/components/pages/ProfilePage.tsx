import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Profile } from '@components/organisms/Profile';
import { IUser } from 'interface/models/user';
import { signOut } from 'next-auth/react';

export const ProfilePage = (props: IUser): JSX.Element => {
  return (
    <Box my={{ base: '16px', md: '24px' }} maxWidth={600} mx={{ base: '24px', md: 'auto' }}>
      <Text fontWeight='bold' fontSize='xl'>
        プロフィール
      </Text>
      <Box mt={8}>
        <Profile {...props} />
      </Box>
      <Flex mt='16' justifyContent='center'>
        <Button onClick={() => signOut()}>ログアウト</Button>
      </Flex>
    </Box>
  );
};
