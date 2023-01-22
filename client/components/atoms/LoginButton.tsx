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
} from '@chakra-ui/react';

const LoginModal = (props: { isOpen: boolean; onClose: () => void }) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w='90%'>
        <ModalHeader>みんなで本屋大賞へようこそ</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center p={8}>
            <Button boxShadow='lg' onClick={() => signIn('google')}>
              <Image w={8} src='/google.png' alt='google icon' />
              login with google
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
