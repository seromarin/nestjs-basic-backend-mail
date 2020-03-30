import { Controller, Get, Post, Body, Param, Delete, Put, Headers } from '@nestjs/common';
import { InboxService } from './inbox.service';
import { Mail } from 'src/entities/mail.entity';
import { identity } from 'rxjs';

@Controller('inbox')
export class InboxController {

    constructor(
        private inboxService: InboxService,
    ) {}

    @Get()
    async index(@Headers('user-email') userEmail: string): Promise<Mail[]> {
        return await this.inboxService.getAllMails(userEmail);
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

    @Delete('delete')
    async deleteMultipleMail(@Body() mailIDs: string[], @Headers('User-Email') userEmail: string) {
        // console.log(mailIDs['ids']);
        return await this.inboxService.deleteMultipleMails(mailIDs['ids'], userEmail);
    }

    @Delete('delete/:id')
    async deleteMail(@Param('id') id, @Headers('User-Email') userEmail: string) {
        return await this.inboxService.deleteMailByID(id, userEmail);
    }

    @Put('/favorite/:id')
    updateMailFav(@Param('id') id): Promise<Mail> {
        return this.inboxService.updateMailFav(id);
    }

}
