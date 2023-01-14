import { Box, Text, Input, Button, Flex, Spacer } from '@chakra-ui/react';

export const ProfileUserName = (props: { username: string }): JSX.Element => {
  return (
    <Box>
      <Text fontWeight='bold'>ユーザーネーム</Text>
      <Flex mt={1}>
        <Input value={props.username} placeholder='Basic usage' />
        <Button ml={8}>更新</Button>
      </Flex>
    </Box>
  );
};
