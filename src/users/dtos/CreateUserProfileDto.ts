import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserProfileDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsDateString()
  dob: Date;
}
