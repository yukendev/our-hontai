import { IBookService } from 'interface/services/book';
import { BookModel } from 'server/models/book';

export const BookService: IBookService = {
  async getNominatedBooksByYear(year: number) {
    return BookModel.getNominatedBooksByYear(year);
  },
};
