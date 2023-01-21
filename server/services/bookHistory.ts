import { IBookHistory, IBookHistoryDocument } from 'interface/models/bookHistory';
import { IBookHistoryService } from 'interface/services/bookHistory';
import mongoose from 'mongoose';
import { BookModel } from 'server/models/book';
import { BookHistoryModel } from 'server/models/bookHistory';
import { ReviewModel } from 'server/models/review';
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
  async deleteBookHistory(userId: string, isbn: number) {
    try {
      const bookInDb = await BookModel.findOne({ isbn });
      // isbnに一致する本がないならエラー
      if (!bookInDb) {
        throw Error('invalid isbn');
      }

      const session = await mongoose.startSession();

      session.startTransaction();

      try {
        // 本の記録を削除
        await BookHistoryModel.deleteOne({ user: userId, book: bookInDb._id }, { session });

        // 本の評価を削除
        await ReviewModel.findOneAndDelete({ reviewer: userId, book: bookInDb._id }, { session });

        // トランザクションをコミット
        await session.commitTransaction();
        console.log('----------commit----------');
      } catch {
        console.log('----------abort----------');
        await session.abortTransaction();
        throw Error();
      } finally {
        console.log('----------end----------');
        await session.endSession();
      }
    } catch {
      throw Error('can not save book history');
    }
  },
};
