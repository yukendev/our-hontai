import { LoginButton } from '@components/atoms/LoginButton';
import { AboutThisSiteButton } from '@components/atoms/AboutThisSiteButton';
import { Flex } from '@chakra-ui/react';
import { useUserInfo } from 'client/hooks/useUserInfo';
import { IconImage } from '@components/atoms/IconImage';
import Link from 'next/link';

const HeaderImageIcon = (props: { src: string }): JSX.Element => {
  const { src } = props;
  return (
    <Link href={'/profile'}>
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
      {isLogedIn ? (
        <Flex mr={5} flexDirection='column' justifyContent='center'>
          <HeaderImageIcon src={user?.image ?? ''} />
        </Flex>
      ) : (
        <Flex mr={5} flexDirection='column' justifyContent='center'>
          <LoginButton />
        </Flex>
      )}
    </Flex>
  );
};
