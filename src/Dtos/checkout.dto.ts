import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import mongoose from 'mongoose';
export class CheckoutDto {
  @IsArray()
  order: [];
  @IsNotEmpty()
  checkout:number;
  
  @IsNotEmpty()
 
  userId: string;

}
