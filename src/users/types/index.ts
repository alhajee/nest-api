import { Exclude } from 'class-transformer';
import { IsNumberString, IsUUID } from 'class-validator';

export class SerializedUser {
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}

export class FindOneParams {
  @IsUUID()
  id: string;
}

export type CreateUserParams = {
  username: string;
  password: string;
};
