import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
  @Prop()
  img: string;

  @Prop()
  name: string;

  @Prop()
  info: string;

  @Prop()
  price: string;
}
export const MenuSchema = SchemaFactory.createForClass(Menu);