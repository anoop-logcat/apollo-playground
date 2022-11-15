import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import { readFileSync } from "fs";
import { connect as DBConnect } from "mongoose";
import { resolve } from "path";
import { HelloResolver } from "./hello/hello.resolver";
import { UsersResolver } from "./users/users.resolver";
require("dotenv").config();

export interface MyContext {}

async function startServer() {
  // Initializing Express Application
  const app: Application = express();
  app.use(cors());
  app.use(urlencoded({ extended: true }));
  app.use(json());

  // Connecting Database
  await DBConnect(process.env.MONGO_URL as string);

  // Initializing Apollo Graphql Server
  const apolloServer = new ApolloServer<MyContext>({
    typeDefs: [
      readFileSync(resolve("src/hello/hello.graphql"), { encoding: "utf-8" }),
      readFileSync(resolve("src/users/users.graphql"), { encoding: "utf-8" }),
    ],
    resolvers: [HelloResolver, UsersResolver],
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  // Exposing the server
  app.listen(process.env.PORT, () => {
    console.log("Server is running at " + process.env.PORT);
  });
}

startServer();
