import { Box, Flex } from '@chakra-ui/react';
import { Header } from '@components/organisms/Header';
import { ProfilePage } from '@components/pages/ProfilePage';
import { IUser } from 'interface/models/user';
import { withId } from 'interface/withId';
import { GetServerSideProps } from 'next';

import { authOptions } from 'pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import { Footer } from '@components/organisms/Footer';

type Props = {
  user: IUser & withId;
};

export default function ProfilePageWrapper(props: Props) {
  const { user } = props;
  return (
    <Flex flexDirection='column'>
      <Header />
      <Box flex={1}>
        <ProfilePage {...user} />
      </Box>
      <Footer />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  // ログインしていない場合は、TOPページにリダイレクト
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const jsonData = JSON.parse(JSON.stringify(session.user));

  return {
    props: {
      user: jsonData,
    },
  };
};
