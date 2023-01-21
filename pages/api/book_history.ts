import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { BookModel } from 'server/models/book';
import { BookHistoryModel } from 'server/models/bookHistory';
import { BookHistoryService } from 'server/services/bookHistory';
import { authOptions } from './auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body, query } = req;
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      // セッションがない場合はエラー
      res.status(400).json({ error: 'session is required' });
    } else {
      switch (method) {
        case 'POST':
          if (!body.isbn) {
            // リクエストのbodyが適切じゃない
            res.status(400).json({ error: 'invalid request body' });
          } else {
            // 正常なリクエストの場合は、DBを更新
            const data = await BookHistoryService.postBookHistory(session.user._id, body.isbn);
            res.status(200).json(data);
          }
          break;
        case 'DELETE':
          if (!body.isbn) {
            // リクエストのbodyが適切じゃない
            res.status(400).json({ error: 'invalid request body' });
          } else {
            // 正常なリクエストの場合は、DBを更新
            const data = await BookHistoryService.deleteBookHistory(session.user._id, body.isbn);
            res.status(200).json(data);
          }
          break;
        default:
          res.status(405).end(`Method ${method} Not Allowed`);
      }
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err });
  }
};

// export default connectDB(handler);
export default handler;
