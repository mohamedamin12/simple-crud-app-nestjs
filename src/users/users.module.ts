import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
const schema = [User];
@Module({
  imports:[TypeOrmModule.forFeature(schema)],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
