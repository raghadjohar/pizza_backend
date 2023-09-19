import { Injectable } from '@nestjs/common';
import { Menu } from './menu.schema';
import { MenuDto } from 'src/Dtos/Menu.dto';
import { MenuRepository } from './Menu.repository';


@Injectable()
export class MenuService {
  
  constructor(private readonly menuRepository: MenuRepository) {}
   async addMenuItem(menuDto: MenuDto): Promise<Menu>  {
    return this.menuRepository.addMenuItem(menuDto);
    
  }

  async getMenuItems(): Promise<Menu[]> {
    return this.menuRepository.getMenuItems();
  }

  async deleteMenuItems(data): Promise<Menu> {
      return this.menuRepository.deleteMenuItems(data);
  }
 
}
