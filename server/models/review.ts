import { IReviewDocument, IReviewModel } from 'interface/models/review';
import mongoose, { Schema } from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const ReviewSchema = new mongoose.Schema<IReviewDocument>(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    reviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

ReviewSchema.statics.getByUserAndBook = async function (userId: string, bookId: string) {
  return this.findOne({ book: bookId, reviewer: userId }).exec();
};

ReviewSchema.statics.getByBookId = async function (bookId: string) {
  return this.find({ book: bookId }).populate('reviewer').exec();
};

export const ReviewModel = getOrCreateModel<IReviewDocument, IReviewModel>('Review', ReviewSchema);
