import { Model, Types } from 'mongoose';

// interface for property
export interface IPoint {
  book_id: Types.ObjectId;
  evaluator_id: Types.ObjectId;
  evaluation: number;
}

// interface for methods
export interface IPointDocument extends IPoint, Document {}

// interface for statics
export interface IPointModel extends Model<IPointDocument> {}
