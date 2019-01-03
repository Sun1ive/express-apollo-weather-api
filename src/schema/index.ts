/// <reference path="../graphql.d.ts" />

import { mergeTypes } from 'merge-graphql-schemas';

const types = [require('./user.gql'), require('./weather.gql')];

export const typeDefs = mergeTypes(types, { all: true });
