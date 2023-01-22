import axios from 'axios';
import { IBookInfo } from 'interface/bookInfo';
import { IOpenBdService } from 'interface/services/openBdService';
import { extractData } from 'server/utils/openBd';
import { BookService } from './book';

// API仕様書: https://openbd.jp
const baseUrl = 'https://api.openbd.jp/v1';

export const OpenBdService: IOpenBdService = {
  async getBookMetaByIsbn(isbnArg: number) {
    // openDBからデータを取得
    const getFromOpenDB = async (isbn: number) => {
      const url = baseUrl + `/get?isbn=${isbn.toString()}`;
      const res = await axios.get(url);
      const resObj = res.data[0];

      if (!resObj) {
        throw Error('can not get data from openBD');
      }

      return resObj;
    };

    try {
      const resFromOpenDb = await getFromOpenDB(isbnArg);
      const bookMeta = extractData(resFromOpenDb);

      return bookMeta;
    } catch {
      throw Error();
    }
  },
};
