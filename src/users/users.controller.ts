import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Post()
    async createUser(@Body() newUser:any):Promise<any>{
        try {
            return this.usersService.createUser(newUser)
        } catch (error) {
            
        }
    }
}
