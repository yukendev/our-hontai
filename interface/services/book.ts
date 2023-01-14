import { IBook } from 'interface/models/book';

export interface IBookService {
  getBookByIsbn: (isbn: number) => Promise<IBook>;
  getNominatedBooksByYear: (year: number) => Promise<IBook[]>;
  getBookInfoByIsbn: (isbn: number) => Promise<IBook>;
}
