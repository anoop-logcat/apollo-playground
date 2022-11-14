import { model, Schema } from "mongoose";

type TUser = {
  display_name: string;
  email: string;
};

const UserSchema: Schema = new Schema({
  display_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

const UserModel = model<TUser>("users", UserSchema);

export { TUser, UserModel };
