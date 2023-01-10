import { IPointDocument, IPointModel } from 'interface/models/point';
import mongoose, { Schema } from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const PointSchema = new mongoose.Schema<IPointDocument>({
  book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  evaluator_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  evaluation: { type: Number, required: true },
});

export const PointModel = getOrCreateModel<IPointDocument, IPointModel>('Point', PointSchema);
