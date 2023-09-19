import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { comparePasswords, encodePassword } from 'src/utiles/bycrypt';
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(
    fullName: string,
    phoneNumber: number,
    email: string,
    password: string,
    role: string,
  ): Promise<any> {
    const hashedPassword = await encodePassword(password);
    const user = await this.usersRepository.findEmail(email);
    if (user) {
      return { message: 'this email signed in ', status: 401 };
    }

    return await this.usersRepository.Signup({
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      role,
    });
  }

  async Login(email: string, password: string): Promise<any> {
    const user = await this.usersRepository.findEmail(email);

    if (!user) {
      return { message: 'Invalid credentials', status: 400 };
    }
    const isPasswordValid = comparePasswords(password, user.password);
    console.log(isPasswordValid, 'isPasswordValid');

    if (!isPasswordValid) {
      return { message: 'Incorrect Password', status: 400 };
    }

    return user;
  }
}
