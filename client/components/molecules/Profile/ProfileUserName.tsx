import { Box, Text, Input, Button, Flex, Spacer } from '@chakra-ui/react';

export const ProfileUserName = (): JSX.Element => {
  return (
    <Box>
      <Text fontWeight='bold'>ユーザーネーム</Text>
      <Flex mt={1}>
        <Input value='てずか' placeholder='Basic usage' />
        <Button ml={8}>更新</Button>
      </Flex>
    </Box>
  );
};
