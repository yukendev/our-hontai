import { IBookInfo } from 'interface/bookInfo';
import { IBook } from 'interface/models/book';
import { IBookService } from 'interface/services/book';
import { BookModel } from 'server/models/book';
import { OpenBdService } from './openBdService';

export const BookService: IBookService = {
  async getBookByIsbn(isbn: number): Promise<IBook> {
    return BookModel.getByIsbn(isbn);
  },

  async getNominatedBooksByYear(year: number): Promise<IBook[]> {
    return BookModel.getNominatedBooksByYear(year);
  },

  async getBookInfoByIsbn(isbn: number): Promise<IBookInfo> {
    try {
      const bookMeta = await OpenBdService.getBookMetaByIsbn(isbn);

      const book = await this.getBookByIsbn(isbn);

      const { image, year, isGrandPrize } = book;

      const result = {
        isbn,
        image,
        year,
        isGrandPrize,
        averagePoint: 0, // 仮の値
        ...bookMeta,
      };
      return result;
    } catch {
      throw Error();
    }
  },
};
