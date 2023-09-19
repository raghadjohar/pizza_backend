import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { Document, Types } from 'mongoose';

export type CheckoutDocument = Checkout & Document;

@Schema()
export class Checkout {
  @Prop()
  @Type(() => Order)
  order: [];
  @Prop()
  checkout: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: mongoose.Schema.Types.ObjectId;
  
}

@Schema()
export class Order {
  @Prop()
  img: string;

  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  quantity: string;
}
export const CheckoutSchema = SchemaFactory.createForClass(Checkout);
