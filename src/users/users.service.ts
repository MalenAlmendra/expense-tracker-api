import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(newUser: any): Promise<any> {
    const user=this.usersRepository.create(newUser)
    this.usersRepository.save(user)
    return user;
  }
}
