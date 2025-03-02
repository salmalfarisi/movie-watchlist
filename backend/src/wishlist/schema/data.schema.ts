import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type DataDocument = Data & Document;

@Schema({ collection: 'data' })
export class Data {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true, unique: false })
  movieId: number;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  genre: number[];

  @Prop({ required: false })
  notify_me: any[];

  @Prop({ required: false })
  already_watch: boolean;

  @Prop({ required: false })
  created_at: string;

  @Prop({ required: false })
  updated_at: string;

  @Prop({ required: false })
  deleted_at: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);
