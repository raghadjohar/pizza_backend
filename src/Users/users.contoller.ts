import { Body, Controller, Post, Req, Session, Request } from '@nestjs/common';
import { UsersService } from './users.services';
import { CreateUserDto } from 'src/Dtos/CreateUserDto';
import { LoginDto } from 'src/Dtos/Login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto, @Session() session) {
    const res = await this.usersService.createUser(
      createUserDto.fullName,
      createUserDto.phoneNumber,
      createUserDto.email,
      createUserDto.password,
      createUserDto.role,
    );
    session.userID = res.email; //store information about user across multiple requests,
    return res
  }

  @Post('/login')
  async Login(@Body() loginDto: LoginDto, @Session() session) {
    return this.usersService.Login(loginDto.email, loginDto.password);
  }

  @Post('/logout')
  async logout(@Request() req: any) {
    req.session = null;
  }
}
