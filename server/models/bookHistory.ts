import { IBookHistoryDocument, IBookHistoryModel } from 'interface/models/bookHistory';
import mongoose, { Schema } from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const BookHistorySchema = new mongoose.Schema<IBookHistoryDocument>(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
);

BookHistorySchema.statics.getByUserAndBook = async function (userId: string, bookId: string) {
  return this.findOne({ user: userId, book: bookId }).exec();
};

export const BookHistoryModel = getOrCreateModel<IBookHistoryDocument, IBookHistoryModel>(
  'BookHistory',
  BookHistorySchema,
);
