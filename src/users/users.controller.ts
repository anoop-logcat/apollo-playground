import { UserInput } from "../generated/sdk";
import { UserModel } from "./users.schema";

class UsersController {
  constructor(private readonly userModel = UserModel) {}

  async getAllUsers() {
    return await this.userModel.find({});
  }

  async getUserByPk(id: string) {
    return await this.userModel.findOne({ id });
  }

  async insertOneUser(args: UserInput) {
    const user = new UserModel(args);
    return await user.save();
  }
}

export default UsersController;
