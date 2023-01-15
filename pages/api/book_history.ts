import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from 'server/middlewares/mongoose';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case 'GET':
        // const data = await BookService.getNominatedBooksByYear(2022); // dummy data
        // res.status(200).json(data);
        break;
      case 'POST':
        // const data = await BookService.getNominatedBooksByYear(2022); // dummy data
        // res.status(200).json(data);
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
