import { signIn } from 'next-auth/react';

export const LoginButton = (): JSX.Element => {
  return <button onClick={() => signIn()}>ログイン</button>;
};
