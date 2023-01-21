import { Box, Center, Link, Text } from '@chakra-ui/react';
import { colors } from 'client/styles/colors';

export const TopInfoLabel = (): JSX.Element => {
  return (
    <>
      <Center
        boxShadow='lg'
        rounded={10}
        py={6}
        color='white'
        // mx={{ base: 2, md: 'auto' }}
        mx='auto'
        maxWidth={600}
        bg={colors.darkOrange}
      >
        <Link
          fontSize={{ base: 'sm', md: 'lg' }}
          fontWeight='bold'
          href='https://www.hontai.or.jp/'
          isExternal
        >
          2023年本屋大賞二次投票開催中📚(1/20~2/28)
        </Link>
      </Center>
    </>
  );
};
