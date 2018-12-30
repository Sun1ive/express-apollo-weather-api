const weather = require('./weather');

exports.resolvers = {
  Query: {
    ...weather.Query
  }
};
