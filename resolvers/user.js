const User = require('../models/user');

module.exports = {
  Query: {
    getUsers: async () => {
      const users = await User.find({});

      return users;
    },

    getUserById: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    }
  }
};
