import { IUser } from 'interface/models/user';
import { withId } from 'interface/withId';

export interface IUserService {
  getById: (id: string) => Promise<(IUser & withId) | null>;
  getByEmail: (email: string) => Promise<(IUser & withId) | null>;
  saveUser: (user: IUser) => Promise<void>;
  updateUsername: (_id: string, username: string) => Promise<void>;
}
