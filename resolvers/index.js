const weather = require('./weather');
const user = require('./user');

exports.resolvers = {
  Query: {
    ...weather.Query,
    ...user.Query
  }
};
