import { Box, Flex, Image, Link } from '@chakra-ui/react';

export const Footer = (): JSX.Element => {
  return (
    <Box>
      <Flex p={4} bg='white' justifyContent='center'>
        <Link mx={2} href='https://twitter.com/our_hontai' isExternal>
          <Image w={6} src='/twitter.png' alt='twitter' />
        </Link>
        <Link mx={2} href='https://yukendev.github.io/our-hontai-terms' isExternal>
          利用規約
        </Link>
        <Link mx={2} href='https://forms.gle/k32FqsFNWDLn2sRP9' isExternal>
          お問い合せ
        </Link>
      </Flex>
    </Box>
  );
};
