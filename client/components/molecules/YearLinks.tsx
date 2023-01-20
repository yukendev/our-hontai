import { Box, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { YearLink } from '@components/atoms/YearLink';

export const YearLinks = (): JSX.Element => {
  const generateYearLink = () => {
    const links = [];
    for (let i = 2004; i < 2024; i++) {
      console.log(i);
      links.push(
        <WrapItem>
          <Flex my={2} justifyContent='center' w={100}>
            <YearLink year={i} />
          </Flex>
        </WrapItem>,
      );
    }
    return links;
  };
  return <Wrap>{generateYearLink()}</Wrap>;
};
