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
