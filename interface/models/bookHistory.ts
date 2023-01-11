import { Model, Types } from 'mongoose';

// interface for property
export interface IBookHistory {
  book_id: Types.ObjectId; // 読んだ本
  user_id: Types.ObjectId; // 読んだ人
}

// interface for methods
export interface IBookHistoryDocument extends IBookHistory, Document {}

// interface for statics
export interface IBookHistoryModel extends Model<IBookHistoryDocument> {}
