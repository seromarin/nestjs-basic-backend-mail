import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { SentService } from './sent.service';
import { Mail } from 'src/entities/mail.entity';

@Controller('sent')
export class SentController {


    constructor(
        private sentService: SentService,
    ) {}

    @Get(':mailito')
    async index(
        @Param('mailito') mailito,
    ): Promise<Mail[]> {
        return await this.sentService.getAllMails(mailito);
    }

    @Get(':id')
    async getMail(
        @Param('id') id,
    ): Promise<any> {
        return await this.sentService.getMail(id);
    }

}
