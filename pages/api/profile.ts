import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { connectDB } from 'server/middlewares/mongoose';
import { UserService } from 'server/services/user';
import { authOptions } from './auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // axiosのintercepterで常にreqestのbodyにuser入れてもいいのでは
    const { method, body } = req;
    switch (method) {
      case 'PUT':
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session) {
          // セッションがない場合はエラー
          res.status(400).json({ error: 'session is required' });
        } else {
          if (typeof body.username !== 'string') {
            // リクエストのbodyが文字列じゃない場合はエラー
            res.status(400).json({ error: 'invalid request body' });
          } else {
            // 正常なリクエストの場合は、DBを更新
            const username = body.username;
            await UserService.updateUsername(session.user._id, username);
            res.status(200).json({});
          }
        }

        break;
      default:
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default connectDB(handler);
// export default handler;
