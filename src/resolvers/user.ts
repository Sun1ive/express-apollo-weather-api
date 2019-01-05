import User from '../models/user';
import * as T from '../types';

export default {
  Query: {
    getUsers: async () => {
      const users = await User.find({});

      return users;
    },

    getUserById: async (_: any, { id }: { id: string }) => {
      const user = await User.findById(id);
      return user;
    }
  },

  Mutation: {
    register: async (
      root: any,
      { email, username, password }: T.UserInput
    ): Promise<T.RegisterResponse> => {
      return {
        error: null,
        user: {
          _id: '1',
          username: 'hello',
          email: 'world'
        }
      };
    },

    login: async () => {
      return {
        error: null,
        user: {
          _id: 1,
          email: 'foo@bar'
        },
        token: '1112312312'
      };
    }
  }
};
