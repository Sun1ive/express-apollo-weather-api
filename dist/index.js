"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv-safe').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const app = express_1.default();
const server = new apollo_server_express_1.ApolloServer({
    schema: apollo_server_express_1.makeExecutableSchema({
        // @ts-ignore
        resolvers: resolvers_1.resolvers,
        typeDefs: schema_1.typeDefs
    }),
    cacheControl: true,
    tracing: true
});
app
    .use(cors_1.default())
    .use(morgan_1.default('dev'))
    .use(helmet_1.default())
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }))
    .use('/db', (req, res) => {
    res.status(200).json({
        data: require('./db/fixtures.json')
    });
});
server.applyMiddleware({ app });
mongoose_1.default
    .connect(`mongodb://${config_1.DB_USER}:${config_1.DB_PASSWORD}@ds259361.mlab.com:59361/apollo-demo-db`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true
})
    .then(() => {
    app.listen({ port: config_1.PORT }, () => {
        console.log(`🚀  Server ready at http://localhost:${config_1.PORT}${server.graphqlPath}`);
    });
})
    .catch(err => {
    console.error('Error during connect to DB ', err);
});
//# sourceMappingURL=index.js.map