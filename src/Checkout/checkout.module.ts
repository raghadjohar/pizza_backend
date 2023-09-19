import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.services';
import { CheckoutController } from './checkout.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Checkout, CheckoutSchema } from './checkout.schema';
import { CheckoutRepository } from './checkout.repository';


@Module({
  imports: [MongooseModule.forFeature([{ name: Checkout.name, schema: CheckoutSchema }])],
  controllers: [CheckoutController],
  providers: [CheckoutService,CheckoutRepository],
})
export class CheckoutModule {}

