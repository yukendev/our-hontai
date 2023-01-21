import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { ReviewService } from 'server/services/review';
import { ReviewAndPointService } from 'server/services/reviewAndPoint';
import { authOptions } from './auth/[...nextauth]';

const isValidBody = (point: number, review: string, isbn: number, isPublished: boolean) => {
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

  // isPublishedに関するバリデーション
  if (typeof isPublished !== 'boolean') {
    return false;
  }
  return true;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body, query } = req;
    switch (method) {
      case 'POST':
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session) {
          // セッションがない場合はエラー
          res.status(400).json({ error: 'session is required' });
        } else {
          const { point, review, isbn, isPublished } = body;
          if (!isValidBody(point, review, isbn, isPublished)) {
            // リクエストのbodyが適切じゃない
            res.status(400).json({ error: 'invalid request body' });
          } else {
            // 正常なリクエストの場合は、DBを更新
            try {
              await ReviewAndPointService.postReviewAndPoint(
                Number(point),
                review,
                session.user._id,
                isbn,
                isPublished,
              );
              res.status(200).json({});
            } catch {
              res.status(500).json({ error: 'can not post review' });
            }
          }
        }
        break;
      case 'GET':
        const isbn = Number(query.isbn);
        const page = Number(query.page);
        // isbn(クエリパラメーター)が13桁の数字じゃない場合は、エラーを返す
        // ppageが数字じゃない、0より小さい場合もエラーを返す
        if (isNaN(isbn) || query.isbn?.length != 13 || isNaN(page) || page < 0) {
          res.status(400).json({ statusCode: 400, message: 'invalid query parameter' });
        } else {
          try {
            const data = await ReviewService.getReviewByIsbn(isbn, page);
            res.status(200).json(data);
          } catch {
            res.status(500).json({ error: 'can not get review' });
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
