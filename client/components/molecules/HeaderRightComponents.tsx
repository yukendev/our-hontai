import { LoginButton } from '@components/atoms/LoginButton';
import { AboutThisSiteButton } from '@components/atoms/AboutThisSiteButton';
import { Box, Flex } from '@chakra-ui/react';
import { useUserInfo } from 'client/hooks/useUserInfo';
import { IconImage } from '@components/atoms/IconImage';
import Link from 'next/link';

const HeaderImageIcon = (props: { src: string }): JSX.Element => {
  const { user } = useUserInfo();
  const { src } = props;
  if (!user) {
    return <></>;
  }
  return (
    <Link href={`/profile?userId=${user._id}`}>
      <IconImage size='32px' src={src} />
    </Link>
  );
};

export const HeaderRightComponents = () => {
  const { isLogedIn, user } = useUserInfo();
  return (
    <Flex my={3} mr={3}>
      <Flex mr={5} flexDirection='column' justifyContent='center'>
        <AboutThisSiteButton />
      </Flex>
      {isLogedIn ? <HeaderImageIcon src={user?.image ?? ''} /> : <LoginButton />}
    </Flex>
  );
};
