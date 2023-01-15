import { signOut } from 'next-auth/react';

export const AboutThisSiteButton = (): JSX.Element => {
  return <button onClick={() => signOut()}>このサイトについて</button>;
};
