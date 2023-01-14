import { IUser } from 'interface/models/user';
import { withId } from 'interface/withId';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: IUser & withId;
  }
}
