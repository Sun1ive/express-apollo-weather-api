import weather from './weather';
import user from './user';

export const resolvers = {
  Query: {
    ...weather.Query,
    ...user.Query
  }
};
