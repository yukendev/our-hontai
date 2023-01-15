import { IBookHistoryDocument } from 'interface/models/bookHistory';
import { IBookHistoryService } from 'interface/services/bookHistory';
import { BookModel } from 'server/models/book';
import { BookHistoryModel } from 'server/models/bookHistory';
import { UserModel } from 'server/models/user';

export const BookHistoryService: IBookHistoryService = {
  async postBookHistory(userId: string, bookId: string): Promise<void> {
    // すでに登録されているならエラーを返す
    const bookHistoryInDb = await BookHistoryModel.findOne({ user_id: userId, book_id: bookId });
    if (bookHistoryInDb) {
      throw Error('already book history registered');
    }
    const user = await UserModel.getById(userId);
    const book = await BookModel.getById(bookId);

    const bookHistoryObj = {
      user_id: user,
      book_id: book,
    };

    const bookHistory = new BookHistoryModel(bookHistoryObj);

    await bookHistory.save();
  },
};
