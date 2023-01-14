import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from 'server/middlewares/mongoose';
import { BookModel } from 'server/models/book';
import { BookService } from 'server/services/book';
import { OpenBdService } from 'server/services/openBdService';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, query } = req;
    switch (method) {
      case 'GET':
        const isbn = Number(query.isbn);

        // isbn(クエリパラメーター)が13桁の数字じゃない場合は、エラーを返す
        if (isNaN(isbn) || query.isbn?.length != 13) {
          res.status(500).json({ statusCode: 400, message: 'invalid query parameter' });
        } else {
          const data = await BookService.getBookInfoByIsbn(isbn);
          res.status(200).json(data);
        }
        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err });
  }
};

export default connectDB(handler);
