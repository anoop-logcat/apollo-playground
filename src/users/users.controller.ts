import { TUser, UserModel } from "./users.model";

class UsersController {
  constructor(private readonly userModel = UserModel) {}

  async getAllUsers() {
    return await this.userModel.find({});
  }

  async getUserByPk(id: string) {
    return await this.userModel.findOne({ id });
  }

  async insertOneUser(args: TUser) {
    const user = new UserModel(args);
    return await user.save();
  }
}

export default UsersController;
