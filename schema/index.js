const { mergeTypes } = require('merge-graphql-schemas');

// const types = [require('./user.gql'), require('./weather.gql')];
const types = [require('./user.gql'), require('./weather.gql')];

const typeDefs = mergeTypes(types, { all: true });

module.exports = { typeDefs };
