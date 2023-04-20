import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseFilters,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfileDto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  async getUsers() {
    return this.userService.findUsers();
  }

  @Post('')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  async getUser(@Param('id', ParseUUIDPipe) id: string) {
    const user = await this.userService.findUser(id);
    if (user) {
      return user;
    } else {
      throw new UserNotFoundException();
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('/:username')
  async getByUsername(@Param('username') username: string) {
    const user = await this.userService.findUserByUsername(username);
    if (user) {
      return user;
    } else {
      throw new UserNotFoundException();
    }
  }

  @Patch(':id')
  async updateUserById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseUUIDPipe) id: string) {
    await this.userService.deleteUser(id);
  }

  @Post(':id/profiles')
  createUserProfile(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.userService.createUserProfile(id, createUserProfileDto);
  }
}
