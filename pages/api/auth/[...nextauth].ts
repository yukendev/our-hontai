import { IUser } from 'interface/models/user';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { UserService } from 'server/services/user';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const userInDb = await UserService.getByEmail(user.email ?? '');

        // サインインの時、DBにユーザーがなければ作成
        if (!userInDb) {
          const userToSave: IUser = {
            email: user.email ?? '',
            username: user.name ?? '',
            status: 'active',
            image: user.image ?? '',
          };
          await UserService.saveUser(userToSave);
        }
      } catch (err) {
        console.log(err);
      }

      return true;
    },
    async session({ session }) {
      try {
        console.log('がが', session);
        const userInDb = await UserService.getByEmail(session.user?.email ?? '');
        if (userInDb) {
          // override session.user with data in DB
          session.user = userInDb;
        }
      } catch (err) {
        console.log(err);
      }

      return session;
    },
  },
});
