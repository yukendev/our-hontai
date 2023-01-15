import { useToast } from '@chakra-ui/react';

type ToasterType = 'success' | 'error';

export const useMyToaster = () => {
  const toast = useToast();
  const showToaster = (type: ToasterType, sentence: string) => {
    toast({
      title: sentence,
      status: type,
      duration: 2000,
      isClosable: true,
    });
  };
  return { showToaster };
};
