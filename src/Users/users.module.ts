import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersRepository } from "./users.repository";
import { User, UserSchema } from "./users.schema";
import { UsersService } from "./users.services";
import { UsersController } from "./users.contoller";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository]
})
export class UsersModule {}