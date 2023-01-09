import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const connectDB =
  (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    const { MONGODB_URI: uri, MONGODB_DB: dbName } = process.env;

    if (!uri) {
      throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }
    await mongoose.connect(uri, { dbName });
    return handler(req, res);
  };
