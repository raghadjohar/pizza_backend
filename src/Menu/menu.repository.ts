import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from './menu.schema';
import { MenuDto } from 'src/Dtos/Menu.dto';

@Injectable()
export class MenuRepository {
  constructor(
    @InjectModel(Menu.name) private readonly menuModel: Model<MenuDocument>,
  ) {}

  async addMenuItem(menuDto: MenuDto): Promise<Menu> {
    const createdMenu = new this.menuModel(menuDto);
    return createdMenu.save();
  }

  async getMenuItems(): Promise<Menu[]> {
    return this.menuModel.find();
  }

  async deleteMenuItems(data): Promise<Menu> {
    return this.menuModel.findOneAndDelete({ _id: data });
  }
}
