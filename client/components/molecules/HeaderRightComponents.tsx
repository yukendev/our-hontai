import { LoginButton } from '@components/atoms/LoginButton';
import { AboutThisSiteButton } from '@components/atoms/AboutThisSiteButton';
import { Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useUserInfo } from 'client/hooks/useUserInfo';
import { IconImage } from '@components/atoms/IconImage';
import Link from 'next/link';
import { ContactButton } from '@components/atoms/ContactButton';

const HeaderImageIcon = (props: { src: string }): JSX.Element => {
  const { src } = props;
  return (
    <Menu>
      <MenuButton>
        <IconImage size='32px' src={src} />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link href={'/profile'}>プロフィール</Link>
        </MenuItem>
        <MenuItem>My 本屋大賞</MenuItem>
      </MenuList>
    </Menu>
  );
};

export const HeaderRightComponents = () => {
  const { isLogedIn, user } = useUserInfo();
  return (
    <Flex my={3} mr={3}>
      <Flex mr={5} flexDirection='column' justifyContent='center'>
        {/* <AboutThisSiteButton /> */}
        <ContactButton />
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
