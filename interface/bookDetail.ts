import { IBook } from './models/book';

export interface IBookDetail extends IBook {
  title: string;
  author: string;
  publisher: string;
  outline: string;
}
