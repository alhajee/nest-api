import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/users/entities/profile.entity';
import { User } from 'src/users/entities/user.entity';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import {
  CreateUserParams,
  CreateUserProfileParams,
  SerializedUser,
  UpdateUserParams,
} from 'src/users/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  findUsers() {
    return this.userRepository.find();
    //return this.users.map((user) => new Ser ializedUser(user));
  }

  findUser(id: string) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({ ...userDetails });
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    return this.userRepository.find({
      where: {
        username,
      },
    });
    //return this.users.find ((user) => user.username === username);
  }

  updateUser(id: string, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: string) {
    return this.userRepository.delete({
      id,
    });
  }

  async createUserProfile(
    id: string,
    userProfileDetails: CreateUserProfileParams,
  ) {
    const user = await this.userRepository.findOneBy({
      id,
    });

    if (!user) {
      throw new UserNotFoundException();
    }

    if (user.profile) {
      this.profileRepository.delete(user.profile);
    }

    const newProfile = this.profileRepository.create(userProfileDetails);
    user.profile = newProfile;
    return this.userRepository.save(user);
  }
}
