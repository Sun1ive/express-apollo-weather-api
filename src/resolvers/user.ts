import User from '../models/user';
import * as T from '../types';
import { CustomContext } from '../types/context';
import { Context, ApolloError } from 'apollo-server-core';
import { format } from '../helpers/formatDbResponse';
import { generateToken } from '../services/jwt';
import { registerValidation, loginValidation } from '../validation';

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

    login: async (
      root: any,
      { UserInput: { email, password } }: T.LoginMutationArgs
    ): Promise<T.LoginResponse | ApolloError> => {
      if (
        !loginValidation.isValidSync({
          email,
          password
        })
      ) {
        throw new Error('Validation error');
      }

      const user = await User.findOne({
        email
      });

      if (!user) {
        throw new Error('User not found');
      }

      const data = {
        user: format(user),
        token: generateToken({ userId: user.id })
      };
      return data;
    }
  }
};
