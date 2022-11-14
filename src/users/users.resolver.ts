import UsersController from "./users.controller";

const controller = new UsersController();

const UsersResolver = {
  Query: {
    getAllUsers: async () => {
      return await controller.getAllUsers();
    },
    getOneUser: async (parent: any, args: any, context: any, info: any) => {
      return await controller.getUserByPk(args.id);
    },
  },
  Mutation: {
    insertOneUser: async (parent: any, args: any, context: any, info: any) => {
      return await controller.insertOneUser(args.object);
    },
  },
};

export { UsersResolver };
