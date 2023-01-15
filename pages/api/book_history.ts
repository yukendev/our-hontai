import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { BookHistoryModel } from 'server/models/bookHistory';
import { BookHistoryService } from 'server/services/bookHistory';
import { authOptions } from './auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body } = req;
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      // セッションがない場合はエラー
      res.status(400).json({ error: 'session is required' });
    } else {
      const { bookId } = body;
      switch (method) {
        case 'GET':
          if (!bookId) {
            // リクエストのbodyが適切じゃない
            res.status(400).json({ error: 'invalid request body' });
          } else {
            // 正常なリクエストの場合は、DBの値を返す
            const data = await BookHistoryModel.findOne({
              user_id: session.user._id,
              book_id: bookId,
            });
            res.status(200).json(data);
          }
          break;
        case 'POST':
          if (!bookId) {
            // リクエストのbodyが適切じゃない
            res.status(400).json({ error: 'invalid request body' });
          } else {
            // 正常なリクエストの場合は、DBを更新
            await BookHistoryService.postBookHistory(session.user._id, bookId);
            res.status(200);
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
