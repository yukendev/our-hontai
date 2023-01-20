import { Box, Flex, Link } from '@chakra-ui/react';

export const Footer = (): JSX.Element => {
  return (
    <Flex p={8} bg='white' justifyContent='center'>
      <Link mr={4} href='https://yukendev.github.io/our-hontai-terms' isExternal>
        利用規約
      </Link>
      <Link ml={4} href='https://forms.gle/k32FqsFNWDLn2sRP9' isExternal>
        お問い合せ
      </Link>
    </Flex>
  );
};
