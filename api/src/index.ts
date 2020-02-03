// src/index.ts

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import "reflect-metadata";
import { schema } from "./graphql/schema";
dotenv.config();

const dbpath =
  process.env.NODE_ENV === "docker"
    ? "mongodb://database:27017/vc-todo"
    : process.env.MONGO_PATH;

async function bootstrap() {
  await mongoose.connect(dbpath, {
    useNewUrlParser: true,
  });

  const app = express();

  app.use(cors());

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  const port = 6002;

  app.listen(port, () => {
    // tslint:disable-next-line
    console.log(`listening at http://localhost:${port}/graphql`);
  });
}

bootstrap();
