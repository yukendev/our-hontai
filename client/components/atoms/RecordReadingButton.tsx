import { Center, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { postBookHistory } from 'client/util/api';

export const RecordReadingButton = (props: { isbn: number }): JSX.Element => {
  const { isbn } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const registerHandler = async () => {
    try {
      setIsLoading(true);
      await postBookHistory(isbn);
      toast({
        title: '読書を記録しました',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch {
      toast({
        title: 'エラーが発生しました',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <Center
      onClick={registerHandler}
      rounded={10}
      py={6}
      color='white'
      mx={{ base: '24px', md: 'auto' }}
      maxWidth={600}
      bg='myTheme.green'
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Text fontSize='lg' fontWeight='bold'>
          この本を読んだ
        </Text>
      )}
    </Center>
  );
};
