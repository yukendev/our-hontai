import mongoose, { models } from 'mongoose';

interface IBook {
  isbn: number; // ISBN番号
  image: string; // 表紙画像のGCSへのパス
  year: number; // ノミネートした年
  isGrandPrize: boolean; // 大賞を取ったかどうか
}

const bookSchema = new mongoose.Schema<IBook>({
  isbn: { type: Number, required: true },
  image: { type: String, required: true },
  year: { type: Number, required: true },
  isGrandPrize: { type: Boolean, required: true },
});

export const BookModel = models.Book ? models.Book : mongoose.model<IBook>('books', bookSchema);
