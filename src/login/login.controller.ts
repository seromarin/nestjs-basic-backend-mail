import { Controller, Body, Post, NotFoundException } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from 'src/entities/user.entity';

@Controller('login')
export class LoginController {

    constructor(
        private loginService: LoginService,
    ) {}

    @Post('')
    async login(@Body() userData: User): Promise<any> {
        const userLogged = await this.loginService.login(userData);
        if (!userLogged) {
            throw new  NotFoundException('User not found')
        }
        return userLogged;
    }

    @Post('newUser')
    async create(@Body() userData: User): Promise<any> {
        console.log({ userData })
        return this.loginService.create(userData);
    }

}
