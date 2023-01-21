import { IReview } from 'interface/models/review';
import { IReviewService } from 'interface/services/review';
import mongoose, { Types } from 'mongoose';
import { BookModel } from 'server/models/book';
import { ReviewModel } from 'server/models/review';
import { UserModel } from 'server/models/user';

export const ReviewService: IReviewService = {
  async postReview(
    point: number,
    review: string,
    userId: string,
    isbn: number,
    isPublished: boolean,
  ) {
    const user = await UserModel.getById(userId);
    const book = await BookModel.getByIsbn(isbn);

    if (!user) {
      throw Error('require login');
    }

    const reviewInDb = await ReviewModel.getByUserAndBook(user._id, book._id);
    // const pointInDb = await PointModel.getByUserAndBook(user._id, book._id);

    // 評価は1冊に対して1つまで
    if (reviewInDb !== null) {
      throw Error('already evaluated');
    }

    // const reviewToSave: IReview = {
    //   book: book as unknown as Types.ObjectId, // 結構無理やり型を認知させている
    //   reviewer: user as unknown as Types.ObjectId,
    //   content: review,
    //   point,
    //   isPublished,
    // };

    const reviewToSave = new ReviewModel({
      book: book as unknown as Types.ObjectId, // 結構無理やり型を認知させている
      reviewer: user as unknown as Types.ObjectId,
      content: review,
      point,
      isPublished,
    });

    try {
      await reviewToSave.save();
    } catch {
      throw Error('can not save review');
    }
  },
  async getPublishedReviewByIsbn(isbn: number, page: number): Promise<IReview[]> {
    try {
      const book = await BookModel.getByIsbn(isbn);
      const reviews = await ReviewModel.getPublishedReviewByBookId(book._id, page);

      return reviews;
    } catch {
      throw Error('can not get review frmo db');
    }
  },
};
