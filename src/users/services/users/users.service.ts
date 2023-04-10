import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types/User';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'ali',
      password: 'ali123',
    },
    {
      username: 'grace',
      password: 'grace123',
    },
    {
      username: 'ola',
      password: 'ola123',
    },
    {
      username: 'usman',
      password: 'usman123',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
