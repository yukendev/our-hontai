import { Flex, Link, Spacer, Text } from '@chakra-ui/react';

type NominatedBookListTitleProps = {
  year: number;
};

export const NominatedBookListTitle = (props: NominatedBookListTitleProps): JSX.Element => {
  const { year } = props;

  return (
    <Flex my={3}>
      <Text fontSize='xl' fontWeight='bold'>{`${year}年ノミネート作品`}</Text>
      <Spacer />
      <Link mt='auto' color='blue.500' href=''>
        全ての作品を見る
      </Link>
    </Flex>
  );
};
