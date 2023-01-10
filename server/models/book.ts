import { IBookDocument, IBookModel } from 'interface/models/book';
import mongoose from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const BookSchema = new mongoose.Schema<IBookDocument>({
  isbn: { type: Number, required: true },
  image: { type: String, required: true },
  year: { type: Number, required: true },
  isGrandPrize: { type: Boolean, required: true },
});

BookSchema.statics.getNominatedBooksByYear = function (year: number) {
  return this.find({ year });
};

export const BookModel = getOrCreateModel<IBookDocument, IBookModel>('Book', BookSchema);
