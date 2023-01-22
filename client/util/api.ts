import axios, { AxiosResponse } from 'axios';
import { IReview } from 'interface/models/review';

// プロフィール画面からユーザーネームを更新
export const updateUsername = async (username: string) => {
  try {
    const res = await axios.put('/api/profile', { username });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

// 本詳細画面から読書を記録
export const postBookHistory = async (isbn: number) => {
  try {
    const res = await axios.post('/api/book_history', { isbn });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

// 本詳細画面から読書の記録を削除 ※ 記録と一緒に感想も削除
export const deleteBookHistory = async (isbn: number) => {
  try {
    const res = await axios.delete('/api/book_history', { params: { isbn } });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

// その本に対する自分の情報を取得: 読んだか、感想は書いたか
export const getBookStatus = async (isbn: number) => {
  try {
    const res = await axios.get('/api/book_status', { params: { isbn } });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

// 感想を投稿
export const postReview = async (
  isbn: number,
  point: number,
  review: string,
  isPublished: boolean,
) => {
  try {
    const res = await axios.post('/api/book_review', { isbn, point, review, isPublished });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

// 本の感想を取得
export const getReviewByPage = async (isbn: number, page: number) => {
  try {
    const res = await axios.get<IReview[]>('/api/book_review', { params: { isbn, page } });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

// 本の感想を削除
export const deleteReview = async (isbn: number) => {
  try {
    const res = await axios.delete<IReview[]>('/api/book_review', { params: { isbn } });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};
