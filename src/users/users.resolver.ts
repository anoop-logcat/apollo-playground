import { Resolvers } from "../generated/sdk";
import UsersController from "./users.controller";

const controller = new UsersController();

const UsersResolver: Resolvers = {
  Query: {
    getAllUsers: async () => {
      return await controller.getAllUsers();
    },
    getOneUser: async (parent, args, context, info) => {
      return await controller.getUserByPk(args.id);
    },
  },
  Mutation: {
    insertOneUser: async (parent, args, context, info) => {
      return await controller.insertOneUser(args.object);
    },
  },
};

export { UsersResolver };
