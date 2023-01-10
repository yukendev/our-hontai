import { Model, Types } from 'mongoose';

// interface for property
export interface IReview {
  book_id: Types.ObjectId;
  reviewer_id: Types.ObjectId;
  content: string;
}

// interface for methods
export interface IReviewDocument extends IReview, Document {}

// interface for statics
export interface IReviewModel extends Model<IReviewDocument> {}
