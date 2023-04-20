import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './CreateUser.dto';
import { IsOptional, ValidateNested } from 'class-validator';
import { UpdateUserProfileDto } from './UpdateUserProfile.dto';
import { CreateUserProfileDto } from './CreateUserProfile.dto';
import { Type } from 'class-transformer';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['confirmPassword', 'profile'] as const),
) {
  @ValidateNested()
  @Type(() => CreateUserProfileDto)
  @IsOptional()
  profile: UpdateUserProfileDto;
}
