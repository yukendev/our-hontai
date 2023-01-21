import { withId } from 'interface/withId';
import { Model, Document } from 'mongoose';

// interface for property
export interface IBook {
  isbn: number; // ISBN番号
  image: string; // 表紙画像のGCSへのパス
  year: number; // ノミネートした年
  isGrandPrize: boolean; // 大賞を取ったかどうか
  averagePoint: number; // 平均評価
}

// interface for methods
export interface IBookDocument extends IBook, Document {}

// interface for statics
export interface IBookModel extends Model<IBookDocument> {
  getById: (id: string) => Promise<IBook>;
  getByIsbn: (isbn: number) => Promise<IBook & withId>;
  getNominatedBooksByYear: (year: number) => Promise<IBook[]>; // その年にノミネートした本を全て取得
}
