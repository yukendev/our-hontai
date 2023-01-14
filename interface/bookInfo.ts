import { IBookMeta } from './bookMeta';
import { IBook } from './models/book';

export interface IBookInfo extends IBook, IBookMeta {}
