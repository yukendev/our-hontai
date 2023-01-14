import { withId } from 'interface/withId';
import { Model, Document } from 'mongoose';
import { UserStatus } from 'server/models/user';

// interface for property
export interface IUser {
  email: string; // メールアドレス
  username: string; // 表示名
  status: UserStatus; // 状態
  image: string; // プロフ画像のGCSへのパス
}

// interface for methods
export interface IUserDocument extends IUser, Document {}

// interface for statics
export interface IUserModel extends Model<IUserDocument> {
  getById: (id: string) => Promise<(IUser & withId) | null>;
  getByEmail: (email: string) => Promise<(IUser & withId) | null>;
}
