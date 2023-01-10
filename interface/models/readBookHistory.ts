import { Model, Types } from 'mongoose';

// interface for property
export interface IReadBookHistory {
  book_id: Types.ObjectId; // 読んだ本
  user_id: Types.ObjectId; // 読んだ人
}

// interface for methods
export interface IReadBookHistoryDocument extends IReadBookHistory, Document {}

// interface for statics
export interface IReadBookHistoryModel extends Model<IReadBookHistoryDocument> {}
