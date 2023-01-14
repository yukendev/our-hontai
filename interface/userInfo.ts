import { IUser } from './models/user';

export interface IUserInfo {
  isLogedIn: boolean;
  user?: IUser & {
    _id: string;
  };
}
