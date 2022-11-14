import { HelloController } from "./hello.controller";

const controller = new HelloController();

const HelloResolver = {
  Query: {
    hello: () => {
      return controller.helloWorld();
    },
  },
};

export { HelloResolver };
