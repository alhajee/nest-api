import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:username')
  getByUsername(@Param('username') username: string) {
    return this.userService.getUserByUsername(username);
  }
}
