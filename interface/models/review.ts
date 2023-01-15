import { withId } from 'interface/withId';
import { Model, Types } from 'mongoose';

// interface for property
export interface IReview {
  book: Types.ObjectId; // コメントがついた本
  reviewer: Types.ObjectId; // コメントした人
  content: string; // コメント
}

// interface for methods
export interface IReviewDocument extends IReview, Document {}

// interface for statics
export interface IReviewModel extends Model<IReviewDocument> {
  getByUserAndBook(userId: string, bookId: string): Promise<IReview | null>;
  getByBookId: (bookId: string) => Promise<(IReview & withId)[]>;
}
