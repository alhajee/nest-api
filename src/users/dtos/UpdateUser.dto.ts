import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './CreateUser.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['confirmPassword'] as const),
) {}
