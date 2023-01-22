import { IUser } from './models/user';
import { withId } from './withId';

export interface IUserInfo {
  isLogedIn: boolean;
  user?: IUser & withId;
}
