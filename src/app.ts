import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import { connect as DBConnect } from "mongoose";
import { HelloGraphql } from "./hello/hello.graphql";
import { HelloResolver } from "./hello/hello.resolver";
import { UsersGraphql } from "./users/users.graphql";
import { UsersResolver } from "./users/users.resolver";
require("dotenv").config();

async function startServer() {
  // Initializing Express Application
  const app: Application = express();
  app.use(cors());
  app.use(urlencoded({ extended: true }));
  app.use(json());

  // Connecting Database
  await DBConnect(process.env.MONGO_URL as string);

  // Initializing Apollo Graphql Server
  const apolloServer = new ApolloServer({
    typeDefs: [HelloGraphql, UsersGraphql],
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
