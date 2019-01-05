export type Maybe<T> = T | null;

export interface UserInput {
  email: string;

  password: string;

  username?: Maybe<string>;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  getUsers: User[];

  getUserById: User;

  city: CityWeather;

  cities: (Maybe<CityWeather>)[];

  hottestCity?: Maybe<CityWeather>;

  coldestCity?: Maybe<CityWeather>;
}

export interface User {
  _id: string;

  email: string;

  password?: Maybe<string>;

  username?: Maybe<string>;
}

export interface CityWeather {
  name: string;

  temp: number;

  pressure: number;

  wind?: Maybe<WindProperty>;
}

export interface WindProperty {
  speed: number;

  direction: number;
}

export interface Mutation {
  register: RegisterResponse;

  login: LoginResponse;
}

export interface RegisterResponse {
  error?: Maybe<Error>;

  user: User;
}

export interface Error {
  message: string;
}

export interface LoginResponse {
  error?: Maybe<Error>;

  user: User;

  token: string;
}

// ====================================================
// Arguments
// ====================================================

export interface GetUserByIdQueryArgs {
  id: string;
}
export interface CityQueryArgs {
  name: string;
}
export interface RegisterMutationArgs {
  UserInput?: Maybe<UserInput>;
}
export interface LoginMutationArgs {
  UserInput?: Maybe<UserInput>;
}