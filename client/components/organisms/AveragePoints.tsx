import { Box, Flex, Text } from '@chakra-ui/react';
import { PointStar } from '@components/atoms/PointStar';

export const AveragePoints = (): JSX.Element => {
  return (
    <Box>
      <Text mb={6} fontWeight='bold'>
        みんなの平均評価
      </Text>
      <Flex>
        <PointStar size={40} color='#FFB26B' />
        <PointStar size={40} color='#FFB26B' />
        <PointStar size={40} color='#FFB26B' />
        <PointStar size={40} color='#FFB26B' />
        <PointStar size={40} color='#FFB26B' />
      </Flex>
    </Box>
  );
};
