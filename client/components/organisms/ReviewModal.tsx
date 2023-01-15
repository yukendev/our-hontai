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
  Spinner,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { PointStar } from '@components/atoms/PointStar';
import { postReview } from 'client/util/api';
import { useMyToaster } from 'client/util/toaster';
import { useState } from 'react';

const EvaluateStars = (props: {
  point: number;
  setPoint: (point: number) => void;
}): JSX.Element => {
  const { point, setPoint } = props;
  const arr = [1, 2, 3, 4, 5];
  return (
    <Flex mx={{ base: '0', md: '4' }}>
      {arr.map((num) => {
        const color = num <= point ? '#FFB26B' : '#c0c0c0';
        return (
          <button key={num} onClick={() => setPoint(num)}>
            <PointStar size={30} color={color} />
          </button>
        );
      })}
    </Flex>
  );
};

type ReviewModalBodyProps = {
  point: number;
  setPoint: (point: number) => void;
  setReview: (review: string) => void;
};

const ReviewModalBody = (props: ReviewModalBodyProps): JSX.Element => {
  const { point, setPoint, setReview } = props;
  const onChangeHandler = (e: { target: { value: string } }) => {
    setReview(e.target.value);
  };
  return (
    <Box>
      <Text fontWeight='bold' fontSize='lg'>
        あなたの評価
      </Text>
      <Flex justify='center' my={4}>
        <Text lineHeight='30px' fontWeight='bold' fontSize={{ base: 'xs', md: 'md' }}>
          まぁまぁ面白い
        </Text>
        <EvaluateStars point={point} setPoint={setPoint} />
        <Text lineHeight='30px' fontWeight='bold' fontSize={{ base: 'xs', md: 'md' }}>
          とても面白い!
        </Text>
      </Flex>
      <Text fontWeight='bold' fontSize='lg'>
        あなたの感想
      </Text>
      <Textarea onChange={onChangeHandler} my={4} placeholder='Here is a sample placeholder' />
    </Box>
  );
};

type ReviewModalProps = {
  isbn: number;
  isOpen: boolean;
  onClose: () => void;
  afterRequestHandler: () => void;
};

export const ReviewModal = (props: ReviewModalProps): JSX.Element => {
  const { isbn, isOpen, onClose, afterRequestHandler } = props;
  const [isSending, setIsSending] = useState<boolean>(false);
  const [point, setPoint] = useState<number>(5);
  const [review, setReview] = useState<string>('');
  const { showToaster } = useMyToaster();

  const sendReviewHandler = async () => {
    setIsSending(true);
    try {
      const res = await postReview(isbn, point, review);
      afterRequestHandler();
      showToaster('success', '送信しました');
      onClose();
    } catch {
      showToaster('error', '送信に失敗しました');
    }
    setIsSending(false);
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
          <ReviewModalBody point={point} setPoint={setPoint} setReview={setReview} />
        </ModalBody>

        <ModalFooter justifyContent='center'>
          {isSending ? (
            <Spinner />
          ) : (
            <Button mx='auto' colorScheme='blue' mr={3} onClick={sendReviewHandler}>
              送信
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
