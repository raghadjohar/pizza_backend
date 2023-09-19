import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery} from 'mongoose';
//method 
@Injectable()
export class UsersRepository {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async Signup(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async Login(email: string ,password: string): Promise<User> {
    return this.userModel.findOne({ email, password });
  }
  async findOne(email: string ,password: string): Promise<User> {
    return this.userModel.findOne({email, password });
  }
  async findEmail(email: string ): Promise<User> {
    return this.userModel.findOne({email});
  }
  }
