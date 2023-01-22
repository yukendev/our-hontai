import { IUserDocument, IUserModel } from 'interface/models/user';
import mongoose from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

// ユーザーの状態、現状activeのみだが今後追加される予定
export type UserStatus = 'active';

const UserSchema = new mongoose.Schema<IUserDocument>({
  email: { type: String, required: true },
  username: { type: String, required: true, maxlength: 30 },
  status: { type: String, required: true },
  image: { type: String, required: true },
});

UserSchema.statics.getById = async function (id: string) {
  return this.findById(id).exec();
};

UserSchema.statics.getByEmail = async function (email: string) {
  return this.findOne({ email }).exec();
};

export const UserModel = getOrCreateModel<IUserDocument, IUserModel>('User', UserSchema);
