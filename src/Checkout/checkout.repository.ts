import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Checkout, CheckoutDocument } from './checkout.schema';
import { CheckoutDto } from 'src/Dtos/Checkout.dto';

@Injectable()
export class CheckoutRepository {
  constructor(
    @InjectModel(Checkout.name)
    private readonly checkoutModel: Model<CheckoutDocument>,
  ) {}

  async addItem(checkoutDto: CheckoutDto): Promise<Checkout> {
    const createdItem = new this.checkoutModel(checkoutDto);
    return createdItem.save();
  }

  async getItems(checkout?: number): Promise<Checkout[]> {
    return this.checkoutModel.find({ checkout: { $gt: checkout } }).populate('userId');
  }

  async getOrders(checkout: number): Promise<Checkout[]> {
    return await this.checkoutModel.find({ checkout }).populate('userId');
  }
}
