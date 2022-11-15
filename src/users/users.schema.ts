import { model, Schema } from "mongoose";
import { UserInput } from "../generated/sdk";

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

const UserModel = model<UserInput>("users", UserSchema);

export { UserInput, UserModel };
