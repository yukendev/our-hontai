import { Center, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { postBookHistory } from 'client/util/api';
import { useMyToaster } from 'client/util/toaster';
import { colors } from 'client/styles/colors';

type RecordReadingButtonProps = {
  isbn: number;
  afterRequestHandler: () => void;
};

export const RecordReadingButton = (props: RecordReadingButtonProps): JSX.Element => {
  const { isbn, afterRequestHandler } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { showToaster } = useMyToaster();

  const registerHandler = async () => {
    try {
      setIsLoading(true);
      await postBookHistory(isbn);
      afterRequestHandler();
      showToaster('success', '読書を記録しました');
    } catch {
      showToaster('error', 'エラーが発生しました');
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
      bg={colors.green}
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
