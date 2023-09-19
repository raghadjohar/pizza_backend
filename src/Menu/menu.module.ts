import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.services';
import { MongooseModule } from "@nestjs/mongoose";
import { Menu, MenuSchema } from './menu.schema';
import { MenuRepository } from './Menu.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])],
  controllers: [MenuController],
  providers: [MenuService, MenuRepository],
})
export class MenuModule {}
