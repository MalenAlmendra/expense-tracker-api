import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(){}

    async createUser(newUser:any):Promise<any>{ return newUser}
}
