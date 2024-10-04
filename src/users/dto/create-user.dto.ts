import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString({ message: 'firstName Must be String' })
  firstName: string;
  @IsString({ message: 'lastName Must be String' })
  lastName: string;
  @IsNumber({}, { message: 'age Must be Number' })
  age: number;
}
