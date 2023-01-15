import { IPointDocument, IPointModel } from 'interface/models/point';
import mongoose, { Schema } from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const PointSchema = new mongoose.Schema<IPointDocument>({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  evaluator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  evaluation: { type: Number, required: true },
});

PointSchema.statics.getByUserAndBook = async function (userId: string, bookId: string) {
  return this.findOne({ book: bookId, evaluator: userId }).exec();
};

export const PointModel = getOrCreateModel<IPointDocument, IPointModel>('Point', PointSchema);
