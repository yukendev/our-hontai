import axios from 'axios';

export const updateUsername = async (username: string) => {
  try {
    const res = await axios.put('/api/profile', { username });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

export const getBookHistory = async (isbn: number) => {
  try {
    const res = await axios.get('/api/book_history', { params: { isbn } });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

export const postBookHistory = async (isbn: number) => {
  try {
    const res = await axios.post('/api/book_history', { isbn });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};

export const getBookStatus = async (isbn: number) => {
  try {
    const res = await axios.get('/api/book_status', { params: { isbn } });
    return res;
  } catch (err) {
    // TODO: しっかりエラーハンドリング
    throw Error(`${err}`);
  }
};
