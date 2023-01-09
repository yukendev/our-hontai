import mongoose, { models } from 'mongoose';

const bookSchema = new mongoose.Schema({
  isbn: Number, // ISBN番号
  image: String, // 表紙画像のGCSへのパス
  year: Number, // ノミネートした年
  isGrandPrize: Boolean, // 大賞を取ったかどうか
});

export const Book = models.Book ? models.Book : mongoose.model('Book', bookSchema);
