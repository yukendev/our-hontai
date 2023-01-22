import mongoose, { Schema } from 'mongoose';

export const getOrCreateModel = <Document, Model>(modelName: string, schema: Schema) => {
  // すでにモデルがある場合はそれを返し、ない場合は作る
  if (mongoose.modelNames().includes(modelName)) {
    return mongoose.model<Document, Model>(modelName);
  }
  return mongoose.model<Document, Model>(modelName, schema);
};
