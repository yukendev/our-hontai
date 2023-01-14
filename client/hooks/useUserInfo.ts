import { IUserInfo } from 'interface/userInfo';
import { useSession } from 'next-auth/react';

export const useUserInfo = (): IUserInfo => {
  const { data: session } = useSession();

  const user = session?.user;

  let result = {
    isLogedIn: session !== null,
  };

  if (!user) {
    return result;
  }

  return {
    isLogedIn: session !== null,
    user: {
      _id: user._id,
      email: user.email ?? '',
      username: user.username ?? '',
      status: user.status,
      image: user.image ?? '',
    },
  };
};
