import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  line1: string;

  @IsString()
  line2?: string;

  @IsNotEmpty()
  @IsNumber()
  zip: string;

  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;
}
