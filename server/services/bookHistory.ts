import { IBookHistory, IBookHistoryDocument } from 'interface/models/bookHistory';
import { IBookHistoryService } from 'interface/services/bookHistory';
import { BookModel } from 'server/models/book';
import { BookHistoryModel } from 'server/models/bookHistory';
import { UserModel } from 'server/models/user';

export const BookHistoryService: IBookHistoryService = {
  async postBookHistory(userId: string, isbn: number): Promise<IBookHistory> {
    const bookInDb = await BookModel.findOne({ isbn });
    // すでに登録されているならエラーを返す
    const bookHistoryInDb = await BookHistoryModel.findOne({
      user_id: userId,
      book_id: bookInDb?._id,
    });
    if (bookHistoryInDb) {
      throw Error('already book history registered');
    }
    const user = await UserModel.getById(userId);

    const bookHistoryObj = {
      user_id: user,
      book_id: bookInDb,
    };

    const bookHistory = new BookHistoryModel(bookHistoryObj);

    return await bookHistory.save();
  },
};
