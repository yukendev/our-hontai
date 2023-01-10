import { Model, Document } from 'mongoose';
import { UserStatus } from 'server/models/user';

// interface for property
export interface IUser {
  email: string;
  username: string;
  status: UserStatus;
  image: string;
}

// interface for methods
export interface IUserDocument extends IUser, Document {}

// interface for statics
export interface IUserModel extends Model<IUserDocument> {}
