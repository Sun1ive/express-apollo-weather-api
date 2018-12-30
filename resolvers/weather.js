const API = require('../api');

const client = new API();

module.exports = {
  Query: {
    city: async (_, { name }) => {
      const {
        data: { data }
      } = await client.getCities();

      return data.find(({ name: cityName }) => cityName === name);
    },

    cities: async () => {
      const {
        data: { data }
      } = await client.getCities();

      return data;
    }
  }
};
