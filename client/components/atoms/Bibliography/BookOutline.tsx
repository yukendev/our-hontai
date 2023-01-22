import { Text } from '@chakra-ui/react';

type BookOutlineProps = {
  outline: string | null;
};

export const BookOutline = (props: BookOutlineProps): JSX.Element => {
  const { outline } = props;
  const hoge = () => {
    if (outline != null) {
      return <Text>{outline}</Text>;
    }
    return (
      <Text>
        あらすじがデータベースに存在しません🙇‍♂️。詳しくは下記リンクから、詳細をご覧ください
      </Text>
    );
  };
  return hoge();
};
