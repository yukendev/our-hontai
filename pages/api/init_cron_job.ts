import { NextApiRequest, NextApiResponse } from 'next';

let isJobScheduled = false;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!isJobScheduled) {
    const cron = require('node-cron');
    cron.schedule('*/3 * * * * *', () => console.log('3秒ごとに実行'));
    isJobScheduled = true;
    res.status(200);
  } else {
    res.status(400);
  }
};

export default handler;
