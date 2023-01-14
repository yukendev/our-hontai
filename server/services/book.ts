import { IBook } from 'interface/models/book';
import { IBookService } from 'interface/services/book';
import { BookModel } from 'server/models/book';

export const BookService: IBookService = {
  async getBookByIsbn(isbn: number): Promise<IBook> {
    return BookModel.getByIsbn(isbn);
  },

  async getNominatedBooksByYear(year: number): Promise<IBook[]> {
    return BookModel.getNominatedBooksByYear(year);
  },
};
