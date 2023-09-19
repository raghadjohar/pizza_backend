import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CheckoutDto } from 'src/Dtos/Checkout.dto';
import { Checkout } from './checkout.schema';
import { CheckoutService } from './checkout.services';
import { Serializer } from 'src/Interceptors/serialize.interceptor';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('/addItems')
  async addItem(@Body() checkoutDto: CheckoutDto): Promise<Checkout> {
    return this.checkoutService.addItem(checkoutDto);
  }

  @Get('/getItems')
  async getItems(): Promise<Checkout[]> {
    return this.checkoutService.getItems();
  }

  @Get('/bigOrder')
  @UseInterceptors(Serializer)
  async getOrders(@Query('checkout') checkout: number): Promise<any> {
    return this.checkoutService.getItems(checkout);
  }
}
//test
