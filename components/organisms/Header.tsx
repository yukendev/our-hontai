import { Flex, Spacer } from '@chakra-ui/react';
import { HeaderLogoImage } from '@components/atoms/HeaderLogoImage';
import { HeaderRightComponents } from '@components/molecules/HeaderRightComponents';

export const Header = () => {
  return (
    <Flex bg='myTheme.paleOrange'>
      <HeaderLogoImage />
      <Spacer />
      <HeaderRightComponents />
    </Flex>
  );
};
