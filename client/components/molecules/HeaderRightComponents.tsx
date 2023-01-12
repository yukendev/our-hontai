import { LoginButton } from '@components/atoms/LoginButton';
import { AboutThisSiteButton } from '@components/atoms/AboutThisSiteButton';
import { Box, Flex } from '@chakra-ui/react';
import { useUserInfo } from 'client/hooks/useUserInfo';
import { IconImage } from '@components/atoms/IconImage';

export const HeaderRightComponents = () => {
  const { isLogedIn, user } = useUserInfo();
  return (
    <Flex my={3} mr={3}>
      <Flex mr={5} flexDirection='column' justifyContent='center'>
        <AboutThisSiteButton />
      </Flex>
      {isLogedIn ? <IconImage size='32px' src={user?.image} /> : <LoginButton />}
    </Flex>
  );
};
