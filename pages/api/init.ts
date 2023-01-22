import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

let isJobScheduled = false;

const setupCron = () => {
  const cron = require('node-cron');
  cron.schedule('*/3 * * * * *', () => console.log('3秒ごとに実行'));
};

const setupMongo = async () => {
  const { MONGODB_URI: uri, MONGODB_DB: dbName } = process.env;

  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return;
  }

  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  await mongoose.connect(uri, { dbName });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!isJobScheduled) {
    // setupCron();
    setupMongo();

    isJobScheduled = true;
    res.status(200);
  } else {
    res.status(400);
  }
};

export default handler;
