import { Center, Flex, Text, Image, Box } from '@chakra-ui/react';
import { Header } from '@components/organisms/Header';
import { Footer } from '@components/organisms/Footer';

type Props = {};

export default function MyHontaiPage(props: Props) {
  return (
    <Flex flexDirection='column'>
      <Header />
      <Center flex={1}>
        <Box>
          <Image mx='auto' src='/wip.png' width={60} alt='wip image' />
          <Text>ただいま開発中の機能です。もう少しお待ちください</Text>
          <Text>自分が読んだ本の記録や、評価などの一覧を表示できる機能を追加する予定です</Text>
        </Box>
      </Center>
      <Footer />
    </Flex>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await unstable_getServerSession(context.req, context.res, authOptions);

//   // ログインしていない場合は、TOPページにリダイレクト
//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/',
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
