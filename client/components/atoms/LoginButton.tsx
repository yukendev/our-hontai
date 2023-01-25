import { signIn } from 'next-auth/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Button,
  Text,
  Link,
  Box,
  Image,
  Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';

const LoginModal = (props: { isOpen: boolean; onClose: () => void }) => {
  const { isOpen, onClose } = props;
  const [isLoading, setIsLoading] = useState(false);
  const signInHandler = () => {
    setIsLoading(true);
    signIn('google');
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w='90%'>
        <ModalHeader>みんなの本屋大賞へようこそ</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center p={8}>
            <Button boxShadow='lg' onClick={() => signInHandler()}>
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  <Image w={8} src='/google.png' alt='google icon' />
                  login with google
                </>
              )}
            </Button>
          </Center>
          <Text mb={4}>
            <Link color='blue.600' href='https://yukendev.github.io/our-hontai-terms' isExternal>
              利用規約
            </Link>
            に同意した上でログインしてください
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const LoginButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={() => onOpen()}>ログイン</button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
