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
    },

    hottestCity: async () => {
      const {
        data: { data }
      } = await client.getCities();

      return data.find(
        ({ temp }) => temp === Math.max(...data.map(({ temp }) => temp))
      );
    },

    coldestCity: async () => {
      const {
        data: { data }
      } = await client.getCities();

      return data.find(
        ({ temp }) => temp === Math.min(...data.map(({ temp }) => temp))
      );
    }
  }
};
