import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProfileDto } from './CreateUserProfile.dto';

export class UpdateUserProfileDto extends PartialType(CreateUserProfileDto) {}
