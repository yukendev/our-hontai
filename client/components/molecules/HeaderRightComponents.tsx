import { LoginButton } from '@components/atoms/LoginButton';
import { AboutThisSiteButton } from '@components/atoms/AboutThisSiteButton';
import { Box, Flex } from '@chakra-ui/react';
import { useUserInfo } from 'client/hooks/useUserInfo';

export const HeaderRightComponents = () => {
  const { isLogedIn, user } = useUserInfo();
  return (
    <Flex my={3} mr={3}>
      <Box mr={5}>
        <AboutThisSiteButton />
      </Box>
      {isLogedIn ? <>ログイン済み</> : <LoginButton />}
    </Flex>
  );
};
