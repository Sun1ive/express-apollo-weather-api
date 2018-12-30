const { mergeTypes } = require('merge-graphql-schemas');

const types = [require('./weather.gql')];

const typeDefs = mergeTypes(types, { all: true });

module.exports = { typeDefs };
