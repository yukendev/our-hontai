import { IReadBookHistoryDocument, IReadBookHistoryModel } from 'interface/models/readBookHistory';
import mongoose, { Schema } from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const ReadBookHistorySchema = new mongoose.Schema<IReadBookHistoryDocument>({
  book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const ReadBookHistoryModel = getOrCreateModel<
  IReadBookHistoryDocument,
  IReadBookHistoryModel
>('ReadBookHistory', ReadBookHistorySchema);
