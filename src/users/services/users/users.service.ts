import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import {
  CreateUserParams,
  FindOneParams,
  SerializedUser,
} from 'src/users/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
    //return this.users.map((user) => new Ser ializedUser(user));
  }

  findUser(param: FindOneParams) {
    return this.userRepository.findOne({
      where: param,
    });
  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({ ...userDetails });
    return this.userRepository.save(newUser);
  }

  async findUserByUsername(username: string) {
    return await this.userRepository.find({
      where: {
        username,
      },
    });
    //return this.users.find ((user) => user.username === username);
  }
}
