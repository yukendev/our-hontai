import axios from 'axios';
import { IBookDetail } from 'interface/bookDetail';
import { IOpenBdService } from 'interface/services/openBdService';
import { extractData } from 'server/utils/openBd';
import { BookService } from './book';

// API仕様書: https://openbd.jp
const baseUrl = 'https://api.openbd.jp/v1';

export const OpenBdService: IOpenBdService = {
  async getBookDetailByIsbn(isbnArg: number) {
    // openDBからデータを取得
    const getFromOpenDB = async (isbn: number) => {
      const url = baseUrl + `/get?isbn=${isbn.toString()}`;
      console.log('url', url);
      const res = await axios.get(url);
      const resObj = res.data[0];

      return resObj;
    };

    // mongoDBからデータを取得
    const getFromMongoDb = async (isbn: number) => {
      const book = await BookService.getBookByIsbn(isbn);
      return book;
    };

    return new Promise(async (resolve, reject) => {
      try {
        const resFromOpenDb = await getFromOpenDB(isbnArg);
        const bookMeta = extractData(resFromOpenDb);

        const resFromMongoDb = await getFromMongoDb(isbnArg);

        const { isbn, image, year, isGrandPrize } = resFromMongoDb;

        const result: IBookDetail = {
          isbn,
          image,
          year,
          isGrandPrize,
          ...bookMeta,
        };

        resolve(result);
      } catch {
        reject();
      }
    });
  },
};
