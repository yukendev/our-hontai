import { Model, Types } from 'mongoose';

// interface for property
export interface IPoint {
  book_id: Types.ObjectId; // 評価された本
  evaluator_id: Types.ObjectId; // 評価したユーザー
  evaluation: number; // 評価(1~5)
}

// interface for methods
export interface IPointDocument extends IPoint, Document {}

// interface for statics
export interface IPointModel extends Model<IPointDocument> {}
