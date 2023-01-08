import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { PointStar } from '@components/atoms/PointStar';

const ReviewModalBody = (): JSX.Element => {
  return (
    <Box>
      <Text fontWeight='bold' fontSize='lg'>
        あなたの評価
      </Text>
      <Flex justify='center' my={4}>
        {/* my={{ base: '16px', md: '24px' }} */}
        <Text lineHeight='30px' fontWeight='bold' fontSize={{ base: 'xs', md: 'md' }}>
          まぁまぁ面白い
        </Text>
        <Flex mx={{ base: '0', md: '4' }}>
          <PointStar size={30} color='#FFB26B' />
          <PointStar size={30} color='#FFB26B' />
          <PointStar size={30} color='#FFB26B' />
          <PointStar size={30} color='#FFB26B' />
          <PointStar size={30} color='#FFB26B' />
        </Flex>
        {/* my={{ base: '16px', md: '24px' }} */}
        <Text lineHeight='30px' fontWeight='bold' fontSize={{ base: 'xs', md: 'md' }}>
          とても面白い!
        </Text>
      </Flex>
      <Text fontWeight='bold' fontSize='lg'>
        あなたの感想
      </Text>
      <Textarea my={4} placeholder='Here is a sample placeholder' />
    </Box>
  );
};

export const ReviewModal = (): JSX.Element => {
  const isOpen = true;
  const onClose = () => {
    console.log('close modal');
  };
  return (
    <Modal size='3xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text textAlign='center'>六人の嘘つきな大学生</Text>
          <Text textAlign='center' fontSize='sm'>
            浅倉秋成
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ReviewModalBody />
        </ModalBody>

        <ModalFooter justifyContent='center'>
          <Button mx='auto' colorScheme='blue' mr={3} onClick={onClose}>
            送信
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
