import { Model, Types } from 'mongoose';

// interface for property
export interface IPoint {
  book: Types.ObjectId; // 評価された本
  evaluator: Types.ObjectId; // 評価したユーザー
  evaluation: number; // 評価(1~5)
}

// interface for methods
export interface IPointDocument extends IPoint, Document {}

// interface for statics
export interface IPointModel extends Model<IPointDocument> {
  getByUserAndBook(userId: string, bookId: string): Promise<IPoint | null>;
}
