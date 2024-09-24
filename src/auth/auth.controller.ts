import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(){}

    @Post()
    async signIn():Promise<any>{

    }
}
