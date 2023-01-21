import { withId } from 'interface/withId';
import { Model, Types } from 'mongoose';

// interface for property
export interface IReview {
  book: Types.ObjectId; // コメントがついた本
  reviewer: Types.ObjectId; // コメントした人
  content: string; // コメント
  point: number; // ポイント
  isPublished: boolean; // 公開するかどうか
}

// interface for methods
export interface IReviewDocument extends IReview, Document {}

// interface for statics
export interface IReviewModel extends Model<IReviewDocument> {
  getByUserAndBook(userId: string, bookId: string): Promise<IReview | null>;
  getByBookId: (bookId: string, page: number) => Promise<(IReview & withId)[]>;
  getPublishedReviewByBookId: (bookId: string, page: number) => Promise<(IReview & withId)[]>;
}
