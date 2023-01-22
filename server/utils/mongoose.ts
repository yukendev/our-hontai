import mongoose, { Schema } from 'mongoose';

export const getOrCreateModel = <Document, Model>(modelName: string, schema: Schema) => {
  // すでにモデルがある場合はそれを返し、ない場合は作る
  if (mongoose.modelNames().includes(modelName)) {
    return mongoose.model<Document, Model>(modelName);
  }
  return mongoose.model<Document, Model>(modelName, schema);
};

export const setupMongo = async () => {
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
