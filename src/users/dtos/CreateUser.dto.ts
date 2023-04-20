import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateUserProfileDto } from './CreateUserProfile.dto';
import { Type } from 'class-transformer';

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

  @ValidateNested()
  @Type(() => CreateUserProfileDto)
  @IsOptional()
  profile: CreateUserProfileDto;
}
