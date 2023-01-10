import mongoose, { Schema } from 'mongoose';

export const getOrCreateModel = <Document, Model>(modelName: string, schema: Schema) => {
  const model = mongoose.model<Document, Model>(modelName);

  // すでにモデルがある場合はそれを返し、ない場合は作る
  return model ? model : mongoose.model<Document, Model>(modelName, schema);
};
