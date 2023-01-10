import { IReviewDocument, IReviewModel } from 'interface/models/review';
import mongoose, { Schema } from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const ReviewSchema = new mongoose.Schema<IReviewDocument>({
  book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  reviewer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
});

export const ReviewModel = getOrCreateModel<IReviewDocument, IReviewModel>('Review', ReviewSchema);
