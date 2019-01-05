import { compareSync, hashSync } from 'bcrypt';

interface DataToCompare {
  password: string;
  hashedPassword: string;
}

export const hashPassword = (password: string): string =>
  hashSync(password, 12);

export const comparePasswords = ({
  password,
  hashedPassword
}: DataToCompare): boolean => compareSync(password, hashedPassword);
