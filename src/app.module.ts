import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckoutModule } from './Checkout/checkout.module';
import { MenuModule } from './Menu/menu.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MenuModule,
    CheckoutModule,
    MongooseModule.forRoot(
      'mongodb+srv://raghad-jo:power440@cluster0.oqrc7yt.mongodb.net/newDB',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
