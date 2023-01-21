import {
  Box,
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
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
  setIsPublished: (isPublished: boolean) => void;
};

const ReviewModalBody = (props: ReviewModalBodyProps): JSX.Element => {
  const { point, setPoint, setReview, setIsPublished } = props;
  const onChangeHandler = (e: { target: { value: string } }) => {
    setReview(e.target.value);
  };
  return (
    <Box>
      <Text fontWeight='bold' fontSize='lg'>
        あなたの評価
      </Text>
      <Flex mx={{ base: 0, md: 36 }}>
        <Text lineHeight='30px' fontWeight='bold' fontSize={{ base: 'xs', md: 'md' }}>
          まぁまぁ面白い
        </Text>
        <Spacer />
        <Text lineHeight='30px' fontWeight='bold' fontSize={{ base: 'xs', md: 'md' }}>
          とても面白い!
        </Text>
      </Flex>
      <Flex justify='center' mb={4}>
        <EvaluateStars point={point} setPoint={setPoint} />
      </Flex>
      <Text fontWeight='bold' fontSize='lg'>
        あなたの感想
      </Text>
      <Textarea onChange={onChangeHandler} my={4} placeholder='Here is a sample placeholder' />
      <Checkbox onChange={(e) => setIsPublished(e.target.checked)} defaultChecked>
        感想を公開する(公開せず、あなただけの記録として保存することもできます)
      </Checkbox>
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
  const [isPublished, setIsPublished] = useState<boolean>(true);
  const { showToaster } = useMyToaster();

  const sendReviewHandler = async () => {
    setIsSending(true);
    try {
      if (review.length > 500) {
        showToaster('error', '感想は500文字以内にしてください');
      } else {
        await postReview(isbn, point, review, isPublished);
        afterRequestHandler();
        showToaster('success', '送信しました');
        onClose();
      }
    } catch {
      showToaster('error', '送信に失敗しました');
    }
    setIsSending(false);
  };

  return (
    <Modal size='3xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w='90%'>
        <ModalHeader>
          <Text textAlign='center'>六人の嘘つきな大学生</Text>
          <Text textAlign='center' fontSize='sm'>
            浅倉秋成
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ReviewModalBody
            point={point}
            setPoint={setPoint}
            setReview={setReview}
            setIsPublished={setIsPublished}
          />
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
