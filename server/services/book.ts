import { IBook } from 'interface/model/book';
import { BookModel } from 'server/models/book';

interface IBookService {
  getNominatedBooksByYear: (year: number) => IBook[];
}

export const BookService: IBookService = {
  getNominatedBooksByYear(year: number) {
    return BookModel.getNominatedBooksByYear(year);
  },
};
