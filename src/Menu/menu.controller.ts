import { Controller, Get, Post, Body, UseInterceptors, Delete, Param} from '@nestjs/common';
import { MenuService } from './menu.services';
import { MenuDto } from 'src/Dtos/Menu.dto';
import { Menu } from './menu.schema';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/add-item')
  async addMenuItem(@Body() menuDto: MenuDto): Promise<Menu> {
    return this.menuService.addMenuItem(menuDto);
  }

  @Get('/getMenu')
  async getMenu(): Promise<Menu[]> {
    return this.menuService.getMenuItems();
  }

  @Delete('/delete/:id')
  async deleteUser(@Param("id") data:any): Promise<Menu> {
    return this.menuService.deleteMenuItems(data);
  }

}
