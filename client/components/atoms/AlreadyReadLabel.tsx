import { colors } from 'client/styles/colors';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Center,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

type AlertProps = {
  isOpen: boolean;
  deleteHandler: () => void;
  cancelRef: any;
  onClose: () => void;
};

const Alert = (props: AlertProps): JSX.Element => {
  const { cancelRef, isOpen, deleteHandler, onClose } = props;
  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            この本の記録を削除しますか？
          </AlertDialogHeader>

          <AlertDialogBody>記録を削除すると、評価も同時に削除されます。</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme='red' onClick={deleteHandler} ml={3}>
              削除
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export const AlreadyReadButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const deleteHandler = () => {
    onClose();
  };
  return (
    <>
      <Center
        onClick={() => onOpen()}
        rounded={10}
        py={6}
        color='white'
        mx={{ base: '24px', md: 'auto' }}
        maxWidth={600}
        bg={colors.green}
      >
        <Text fontSize='lg' fontWeight='bold'>
          あなたはこの本を読んでいます
        </Text>
      </Center>
      <Alert
        isOpen={isOpen}
        deleteHandler={deleteHandler}
        cancelRef={cancelRef}
        onClose={onClose}
      />
    </>
  );
};
