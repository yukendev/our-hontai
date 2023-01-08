import { Box, Flex, Text } from '@chakra-ui/react';
import { PointStar } from '@components/atoms/PointStar';

export const AveragePoints = (): JSX.Element => {
  return (
    <Box>
      <Text fontWeight='bold'>みんなの平均評価</Text>
      <Flex>
        <PointStar color='#FFB26B' />
        <PointStar color='#FFB26B' />
        <PointStar color='#FFB26B' />
        <PointStar color='#FFB26B' />
        <PointStar color='#FFB26B' />
      </Flex>
    </Box>
  );
};
