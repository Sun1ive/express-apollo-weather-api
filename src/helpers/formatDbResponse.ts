import { Document } from 'mongoose';

export const format = (data: Document) => JSON.parse(JSON.stringify(data));
