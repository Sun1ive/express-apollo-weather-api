require('dotenv-safe').config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { join } from 'path';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import mongoose from 'mongoose';

import { PORT, DB_USER, DB_PASSWORD } from './config';
import { mergeTypes, fileLoader } from 'merge-graphql-schemas';
import { resolvers } from './resolvers';
import { Context } from 'apollo-server-core';
import { CustomContext } from './types/context';

const typeDefs = mergeTypes(fileLoader(join(__dirname, './schema')));

const app = express();

const server = new ApolloServer({
  schema: makeExecutableSchema({
    resolvers,
    typeDefs
  }),
  formatError(error: Error) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.log(error);
    }
    return error;
  },
  context: ({ req, res }: Context<CustomContext>) => ({ req, res })
});

app
  .use(cors())
  .use(morgan('dev'))
  .use(helmet())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/db', (req, res) => {
    res.status(200).json({
      data: require('./db/fixtures.json')
    });
  });

server.applyMiddleware({ app });

mongoose
  .connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@ds259361.mlab.com:59361/apollo-demo-db`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: true
    }
  )
  .then(() => {
    app.listen({ port: PORT }, () => {
      console.log(
        `🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  })
  .catch(err => {
    console.error('Error during connect to DB ', err);
  });
