import { Expose, Type } from 'class-transformer';

class Order {
  @Expose()
  img: string;
  @Expose()
  name: string;
  @Expose()
  price: number;
  @Expose()
  quantity: number;
}

class UserId {
  @Expose()
  fullName: string;
  @Expose()
  email: string;
  @Expose()
  phoneNumber: number;
}

export class UserDto {
  @Expose()
  _id: number;
  @Expose()
  checkout: number;
  @Expose()
  @Type(() => Order)
  order: Order[];

  @Expose()
  @Type(() => UserId)
  userId: UserId[];

}
