import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from 'server/middlewares/mongoose';
import { BookModel } from 'server/models/book';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case 'GET':
        // const data = await BookModel.find();

        // res.status(200).json(data);

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
