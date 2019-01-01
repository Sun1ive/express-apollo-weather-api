require('dotenv-safe').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const mongoose = require('mongoose');

const { PORT, DB_USER, DB_PASSWORD } = require('./config');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const app = express();

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers
  })
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
