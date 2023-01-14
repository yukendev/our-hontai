import { Box, Text } from '@chakra-ui/react';
import { IconImage } from '@components/atoms/IconImage';

export const ProfileImage = (props: { src: string }): JSX.Element => {
  const { src } = props;
  return (
    <Box>
      <IconImage src={src} size='120px' />
      <button>画像を変更する</button>
    </Box>
  );
};
