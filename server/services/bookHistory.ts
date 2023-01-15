import { IBookHistory, IBookHistoryDocument } from 'interface/models/bookHistory';
import { IBookHistoryService } from 'interface/services/bookHistory';
import { BookModel } from 'server/models/book';
import { BookHistoryModel } from 'server/models/bookHistory';
import { UserModel } from 'server/models/user';

export const BookHistoryService: IBookHistoryService = {
  async postBookHistory(userId: string, isbn: number): Promise<IBookHistory> {
    try {
      const bookInDb = await BookModel.findOne({ isbn });
      // すでに登録されているならエラーを返す
      const bookHistoryInDb = await BookHistoryModel.getByUserAndBook(userId, bookInDb?._id);
      if (bookHistoryInDb) {
        throw Error('already book history registered');
      }
      const user = await UserModel.getById(userId);

      const bookHistoryObj = {
        user: user,
        book: bookInDb,
      };

      const bookHistory = new BookHistoryModel(bookHistoryObj);

      return await bookHistory.save();
    } catch {
      throw Error('can not save book history');
    }
  },
};
