import { Box, Center, Text, useDisclosure } from '@chakra-ui/react';
import { ReviewModal } from '@components/organisms/ReviewModal';

type ReviewButtonProps = {
  isbn: number;
  afterRequestHandler: () => void;
};

export const ReviewButton = (props: ReviewButtonProps): JSX.Element => {
  const { isbn, afterRequestHandler } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Center
        rounded={10}
        py={6}
        color='white'
        mx={{ base: '24px', md: 'auto' }}
        maxWidth={600}
        bg='myTheme.darkOrange'
        onClick={() => onOpen()}
      >
        <Text fontSize='lg' fontWeight='bold'>
          この本の評価・感想を書く
        </Text>
      </Center>
      <ReviewModal
        isbn={isbn}
        isOpen={isOpen}
        onClose={onClose}
        afterRequestHandler={afterRequestHandler}
      />
    </Box>
  );
};
