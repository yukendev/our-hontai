import { Box } from '@chakra-ui/react';
import { Header } from '@components/organisms/Header';
import { ProfilePage } from '@components/pages/ProfilePage';
import { IUser } from 'interface/models/user';
import { withId } from 'interface/withId';
import { GetServerSideProps } from 'next';
import { UserService } from 'server/services/user';

type Props = {
  user: IUser & withId;
};

export default function ProfilePageWrapper(props: Props) {
  const { user } = props;
  return (
    <Box>
      <Header />
      <ProfilePage {...user} />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.query.userId as string;
  // クエリパラメーターがundefined, string[]だった場合のエラー処理

  const userInfo = await UserService.getById(userId);
  const jsonData = JSON.parse(JSON.stringify(userInfo));

  return {
    props: {
      user: jsonData,
    },
  };
};
