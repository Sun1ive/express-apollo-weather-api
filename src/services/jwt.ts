import { sign, verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

interface SignData {
  userId: string;
}

export const generateToken = ({ userId }: SignData): string =>
  sign({ userId }, JWT_SECRET, {
    expiresIn: '1h'
  });

export const verifyToken = (token: string) => {
  try {
    const decoded = verify(token, JWT_SECRET);
    console.log(decoded);
    return true;
  } catch (error) {
    console.log(error);
  }
};
