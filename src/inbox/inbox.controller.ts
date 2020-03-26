import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InboxService } from './inbox.service';
import { Mail } from 'src/entities/mail.entity';
import { identity } from 'rxjs';

@Controller('inbox')
export class InboxController {

    constructor(
        private inboxService: InboxService,
    ) {}

    @Get()
    async index(): Promise<Mail[]> {
        return await this.inboxService.getAllMails();
    }

    @Get(':id')
    async getMail(
        @Param('id') id,
        @Body() mailData: Mail,
    ): Promise<any> {
        return await this.inboxService.getMail(id);
    }

    @Post('send')
    async createMail(@Body() mailData: Mail): Promise<any> {
        console.log({ mailData })
        return this.inboxService.createNewMail(mailData);
    }

}
