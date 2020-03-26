import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async login(user: User): Promise<User> {
        return await this.userRepository.findOne(user);
    }

}
