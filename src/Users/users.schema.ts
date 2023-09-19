import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  fullName: string;

  @Prop()
  phoneNumber: number;

  @Prop()
  email: string;

  @Prop()
  password: string;
  
  @Prop()
  role:string;
}

export const UserSchema = SchemaFactory.createForClass(User);