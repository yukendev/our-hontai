import { IBookDocument, IBookModel } from 'interface/models/book';
import mongoose from 'mongoose';
import { getOrCreateModel } from 'server/utils/mongoose';

const BookSchema = new mongoose.Schema<IBookDocument>({
  isbn: { type: Number, required: true },
  image: { type: String, required: true },
  year: { type: Number, required: true },
  isGrandPrize: { type: Boolean, required: true },
});

BookSchema.statics.getById = async function (id: number) {
  return this.findById(id).exec();
};

BookSchema.statics.getByIsbn = async function (isbn: number) {
  return this.findOne({ isbn }).exec();
};

BookSchema.statics.getNominatedBooksByYear = async function (year: number) {
  return this.find({ year }).exec();
};

export const BookModel = getOrCreateModel<IBookDocument, IBookModel>('Book', BookSchema);
