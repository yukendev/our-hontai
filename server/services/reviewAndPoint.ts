import { IPoint } from 'interface/models/point';
import { IReview } from 'interface/models/review';
import { IReviewAndPointService } from 'interface/services/reviewAndPoint';
import mongoose, { Types } from 'mongoose';
import { BookModel } from 'server/models/book';
import { PointModel } from 'server/models/point';
import { ReviewModel } from 'server/models/review';
import { UserModel } from 'server/models/user';

export const ReviewAndPointService: IReviewAndPointService = {
  async postReviewAndPoint(point: number, review: string, userId: string, isbn: number) {
    const user = await UserModel.getById(userId);
    const book = await BookModel.getByIsbn(isbn);

    if (!user) {
      return;
    }

    const reviewToSave: IReview = {
      book_id: book as unknown as Types.ObjectId, // 結構無理やり型を認知させている
      reviewer_id: user as unknown as Types.ObjectId,
      content: review,
    };

    const pointToSave: IPoint = {
      book_id: book as unknown as Types.ObjectId,
      evaluator_id: user as unknown as Types.ObjectId,
      evaluation: point,
    };

    const session = await mongoose.startSession();

    // 評価と感想はどちらかの保存が失敗したら、どちらも保存しない
    try {
      session.startTransaction();
      await ReviewModel.create([reviewToSave], { session });
      await PointModel.create([pointToSave], { session });
      await session.commitTransaction();
      console.log('--------commit-----------');
    } catch {
      await session.abortTransaction();
      console.log('--------abort-----------');
    } finally {
      await session.endSession();
    }
  },
};
