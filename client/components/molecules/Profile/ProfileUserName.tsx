import { Box, Text, Input, Button, Flex } from '@chakra-ui/react';
import { updateUsername } from 'client/util/api';
import { useMyToaster } from 'client/util/toaster';
import { SetStateAction, useState } from 'react';

const usernameValidation = 30;

export const ProfileUserName = (props: { username: string }): JSX.Element => {
  const [usernameValue, setUsernameValue] = useState(props.username);
  const [err, setErr] = useState<string | null>();
  const { showToaster } = useMyToaster();
  const handleChange = (event: { target: { value: SetStateAction<string> } }) =>
    setUsernameValue(event.target.value);

  const saveHandler = async () => {
    try {
      if (usernameValue.length > usernameValidation) {
        setErr(`ユーザーネームは${usernameValidation}文字以下に設定してください`);
        return;
      }
      if (usernameValue.length == 0) {
        setErr('ユーザーネームを入力してください');
        return;
      }

      await updateUsername(usernameValue);
      showToaster('success', 'ユーザーネームを更新しました');
      setErr(null);
    } catch {
      setErr('ユーザーネームが保存できませんでした');
    }
  };
  return (
    <Box>
      <Text fontWeight='bold'>ユーザーネーム</Text>
      <Flex mt={1}>
        <Input
          bg='white'
          onChange={handleChange}
          value={usernameValue}
          placeholder='ユーザーネーム'
        />
        <Button ml={8} onClick={saveHandler}>
          更新
        </Button>
      </Flex>
      {err && (
        <Text color='red' fontWeight='bold'>
          {err}
        </Text>
      )}
    </Box>
  );
};
