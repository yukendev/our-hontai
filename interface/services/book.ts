import { IBook } from 'interface/models/book';

export interface IBookService {
  getNominatedBooksByYear: (year: number) => Promise<IBook[]>;
}
