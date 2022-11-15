import { Resolvers } from "../generated/sdk";
import { HelloController } from "./hello.controller";

const controller = new HelloController();

const HelloResolver: Resolvers = {
  Query: {
    hello: () => {
      return controller.helloWorld();
    },
  },
};

export { HelloResolver };
