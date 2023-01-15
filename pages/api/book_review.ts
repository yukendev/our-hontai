import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { ReviewAndPointService } from 'server/services/reviewAndPoint';
import { authOptions } from './auth/[...nextauth]';

const isValidBody = (point: string, review: string, bookId: string) => {
  // pointに関するバリデーション
  if (isNaN(Number(point)) || 1 > Number(point) || 5 < Number(point)) {
    return false;
  }

  // reviewに関するバリデーション
  if (typeof review !== 'string' || review.length > 300) {
    return false;
  }

  // bookIdに関するバリデーション
  if (!bookId) {
    return false;
  }
  return true;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body } = req;
    switch (method) {
      case 'GET':
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session) {
          // セッションがない場合はエラー
          res.status(400).json({ error: 'session is required' });
        } else {
          const { point, review, bookId } = body;
          if (!isValidBody(point, review, body)) {
            // リクエストのbodyが適切じゃない
            res.status(400).json({ error: 'invalid request body' });
          } else {
            // 正常なリクエストの場合は、DBを更新
            await ReviewAndPointService.postReviewAndPoint(
              Number(point),
              review,
              session.user._id,
              bookId,
            );
            res.status(200);
          }
        }
        res.status(200);
        break;
      case 'POST':
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
