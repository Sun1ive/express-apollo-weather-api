import User from '../models/user';
import * as T from '../types';
import { CustomContext } from '../types/context';
import { Context, ApolloError } from 'apollo-server-core';
import { format } from '../helpers/formatDbResponse';
import { generateToken } from '../services/jwt';
import { registerValidation } from '../validation/register';

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
    ): Promise<T.RegisterResponse | ApolloError> => {
      if (
        !registerValidation.isValidSync({
          email,
          password,
          username
        })
      ) {
        throw new Error('Validation error');
      }
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

      const data = {
        user: format(newUser),
        token: generateToken({ userId: newUser.id })
      };

      return data;
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
