import { IBookHistoryDocument, IBookHistoryModel } from 'interface/models/bookHistory';
import mongoose, { Schema } from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const BookHistorySchema = new mongoose.Schema<IBookHistoryDocument>({
  book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const BookHistoryModel = getOrCreateModel<
  IBookHistoryDocument,
  IBookHistoryModel
>('BookHistory', BookHistorySchema);
