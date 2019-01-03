"use strict";
/// <reference path="../graphql.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const types = [require('./user.gql'), require('./weather.gql')];
exports.typeDefs = merge_graphql_schemas_1.mergeTypes(types, { all: true });
//# sourceMappingURL=index.js.map