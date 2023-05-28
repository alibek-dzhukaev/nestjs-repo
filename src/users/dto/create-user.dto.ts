import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString({ message: 'should be string' })
  @IsEmail({}, { message: 'invalid email' })
  readonly email: string;

  @ApiProperty()
  @IsString({ message: 'should be string' })
  @Length(4, 14, {
    message: 'length should be not less than 4 and not more then 16',
  })
  readonly password: string;
}
