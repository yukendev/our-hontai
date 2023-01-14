import { IUser } from 'interface/models/user';
import { IUserService } from 'interface/services/user';
import { UserModel } from 'server/models/user';

export const UserService: IUserService = {
  async getById(id: string) {
    return UserModel.getById(id);
  },
  async getByEmail(email: string) {
    return UserModel.getByEmail(email);
  },
  async saveUser(userObj: IUser) {
    const user = new UserModel(userObj);
    await user.save();
  },
};
