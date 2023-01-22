import { Model, Types } from 'mongoose';

// interface for property
export interface IBookHistory {
  book: Types.ObjectId; // 読んだ本
  user: Types.ObjectId; // 読んだ人
}

// interface for methods
export interface IBookHistoryDocument extends IBookHistory, Document {}

// interface for statics
export interface IBookHistoryModel extends Model<IBookHistoryDocument> {
  getByUserAndBook(userId: string, bookId: string): Promise<IBookHistory>;
}
