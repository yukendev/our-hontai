import { Model, Document } from 'mongoose';

// interface for property
export interface IBook {
  isbn: number; // ISBN番号
  image: string; // 表紙画像のGCSへのパス
  year: number; // ノミネートした年
  isGrandPrize: boolean; // 大賞を取ったかどうか
}

// interface for methods
export interface IBookDocument extends IBook, Document {}

// interface for statics
export interface IBookModel extends Model<IBookDocument> {
  getNominatedBooksByYear: (year: number) => IBook[]; // その年にノミネートした本を全て取得
}
