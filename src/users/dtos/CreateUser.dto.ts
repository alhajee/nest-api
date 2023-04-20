import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserProfileDto } from './CreateUserProfileDto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  confirmPassword: string;

  @IsOptional()
  profile: CreateUserProfileDto;
}
