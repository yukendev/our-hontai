import { LoginButton } from '@components/atoms/LoginButton';
import { AboutThisSiteButton } from '@components/atoms/AboutThisSiteButton';
import { Box } from '@chakra-ui/react';

export const HeaderRightComponents = () => {
  return (
    <Box my={3} mr={3}>
      <AboutThisSiteButton />
      <LoginButton />
    </Box>
  );
};
