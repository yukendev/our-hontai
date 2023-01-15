import { ReviewModal } from '@components/organisms/ReviewModal';
import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { BookModel } from 'server/models/book';
import { BookHistoryModel } from 'server/models/bookHistory';
import { ReviewModel } from 'server/models/review';
import { BookService } from 'server/services/book';
import { authOptions } from './auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, query } = req;
    switch (method) {
      case 'GET':
        const session = await unstable_getServerSession(req, res, authOptions);
        const isbn = Number(query.isbn);
        if (!session) {
          // セッションがない場合はエラー
          res.status(400).json({ error: 'session is required' });
        } else {
          // isbn(クエリパラメーター)が13桁の数字じゃない場合は、エラーを返す
          if (isNaN(isbn) || query.isbn?.length != 13) {
            res.status(400).json({ statusCode: 400, message: 'invalid query parameter' });
          } else {
            const book = await BookModel.getByIsbn(isbn);
            const bookHistory = await BookHistoryModel.getByUserAndBook(session.user._id, book._id);
            const bookreview = await ReviewModel.getByUserAndBook(session.user._id, book._id);
            const data = {
              isHistoryExist: bookHistory !== null,
              isReviewExist: bookreview !== null,
            };
            res.status(200).json(data);
          }
        }
        break;
      default:
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err });
  }
};

// export default connectDB(handler);
export default handler;
