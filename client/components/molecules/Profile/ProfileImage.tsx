import { Box, Text } from '@chakra-ui/react';
import { IconImage } from '@components/atoms/IconImage';

export const ProfileImage = (): JSX.Element => {
  return (
    <Box>
      <IconImage size='120px' />
      <button>画像を変更する</button>
    </Box>
  );
};
