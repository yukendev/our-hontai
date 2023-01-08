import { Box } from '@chakra-ui/react';
import { Header } from '@components/organisms/Header';
import { ProfilePage } from '@components/pages/ProfilePage';

export default function ProfilePageWrapper() {
  return (
    <Box>
      <Header />
      <ProfilePage />
    </Box>
  );
}
