import { IsEmail, IsNotEmpty,IsNumber, IsString } from 'class-validator';
export class CreateUserDto {

  @IsString()
  fullName: string;

  @IsNumber()
  phoneNumber: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  role:string;
}
