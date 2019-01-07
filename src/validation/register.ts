import { string, object } from 'yup';

export const registerValidation = object().shape({
  email: string()
    .email()
    .required(),
  password: string().required(),
  username: string().notRequired()
});
