import { Injectable } from '@nestjs/common';
import { Checkout } from './checkout.schema';
import { CheckoutDto } from 'src/Dtos/Checkout.dto';
import { CheckoutRepository } from './checkout.repository';


@Injectable()
export class CheckoutService {
  constructor(private readonly checkoutRepository: CheckoutRepository) {}

  async addItem(checkoutDto: CheckoutDto): Promise<Checkout> {
    return this.checkoutRepository.addItem(checkoutDto);
  }
  async getItems(checkout?: number): Promise<Checkout[]> {
    return this.checkoutRepository.getItems(checkout);
  }

  async getOrders(checkout: number): Promise<Checkout[]> {
    return await this.checkoutRepository.getOrders(checkout)
  }


}