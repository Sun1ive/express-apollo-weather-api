import API from '../api';

const client = new API();

type cityQuery = {
  name: string;
};

type temperature = {
  temp: number;
};

export default {
  Query: {
    city: async (_: any, { name }: cityQuery) => {
      const {
        data: { data }
      } = await client.getCities();

      return data.find(({ name: cityName }: cityQuery) => cityName === name);
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
        ({ temp }: temperature) =>
          temp === Math.max(...data.map(({ temp }: temperature) => temp))
      );
    },

    coldestCity: async () => {
      const {
        data: { data }
      } = await client.getCities();

      return data.find(
        ({ temp }: temperature) =>
          temp === Math.min(...data.map(({ temp }: temperature) => temp))
      );
    }
  }
};
