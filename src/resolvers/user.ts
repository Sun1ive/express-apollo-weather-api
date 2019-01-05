import User from '../models/user';
import * as T from '../types';
import { CustomContext } from '../types/context';
import { Context } from 'apollo-server-core';

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
      { UserInput: { email, username, password } }: T.RegisterMutationArgs,
      { req, res }: Context<CustomContext>
    ): Promise<T.RegisterResponse> => {
      const user = await User.findOne({
        email
      });

      if (user) {
        throw new Error('User already exist');
      }

      const newUser = await User.create({
        email,
        password,
        username
      });

      return {
        // @ts-ignore
        user: newUser.toGraph()
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
