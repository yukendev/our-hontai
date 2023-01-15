import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { ReviewAndPointService } from 'server/services/reviewAndPoint';
import { authOptions } from './auth/[...nextauth]';

const isValidBody = (point: number, review: string, isbn: number) => {
  // pointに関するバリデーション
  if (isNaN(point) || 1 > point || 5 < point) {
    return false;
  }

  // reviewに関するバリデーション
  if (typeof review !== 'string' || review.length > 500) {
    return false;
  }

  // isbnに関するバリデーション
  if (isNaN(isbn) || isbn.toString().length != 13) {
    return false;
  }
  return true;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body } = req;
    switch (method) {
      case 'POST':
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session) {
          // セッションがない場合はエラー
          res.status(400).json({ error: 'session is required' });
        } else {
          const { point, review, isbn } = body;
          if (!isValidBody(point, review, isbn)) {
            // リクエストのbodyが適切じゃない
            res.status(400).json({ error: 'invalid request body' });
          } else {
            // 正常なリクエストの場合は、DBを更新
            await ReviewAndPointService.postReviewAndPoint(
              Number(point),
              review,
              session.user._id,
              isbn,
            );
            res.status(200).json({});
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
