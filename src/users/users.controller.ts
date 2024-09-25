import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async createUser(@Body() newUser: any): Promise<any> {
    try {
      return this.usersService.createUser(newUser);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
