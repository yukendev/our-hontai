import { IReviewDocument, IReviewModel } from 'interface/models/review';
import mongoose, { Schema } from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const ReviewSchema = new mongoose.Schema<IReviewDocument>(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    reviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String },
    point: { type: Number, required: true },
    isPublished: { type: Boolean, required: true },
  },
  { timestamps: true },
);

ReviewSchema.statics.getByUserAndBook = async function (userId: string, bookId: string) {
  return this.findOne({ book: bookId, reviewer: userId }).exec();
};

ReviewSchema.statics.getPublishedReviewByBookId = async function (bookId: string, page: number) {
  const reviewsPerPage = 5; // 1ページに取得するreviewの数

  return this.find({ book: bookId, isPublished: true }, null, { sort: { createdAt: -1 } })
    .skip((page - 1) * reviewsPerPage)
    .limit(reviewsPerPage)
    .populate({ path: 'reviewer', select: 'image' })
    .exec();
};

export const ReviewModel = getOrCreateModel<IReviewDocument, IReviewModel>('Review', ReviewSchema);
