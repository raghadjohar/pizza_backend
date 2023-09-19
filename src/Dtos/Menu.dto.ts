import { IsNotEmpty } from "class-validator";

export class MenuDto {
@IsNotEmpty()
  img: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  info: string;
  @IsNotEmpty()
  price: string;
}
