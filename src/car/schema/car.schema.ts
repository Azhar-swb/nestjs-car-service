import * as mongoose from 'mongoose';

export const carSchema = new mongoose.Schema({
  id: Number,
  brand: String,
  color: String,
  model: String,
});
