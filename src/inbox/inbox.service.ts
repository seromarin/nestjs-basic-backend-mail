import { Injectable } from '@nestjs/common';
import { Mail } from 'src/entities/mail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InboxService {

    constructor(
        @InjectRepository(Mail) private mailRepository: Repository<Mail>,
    ) { }

    async getAllMails(): Promise<Mail[]> {
        return await this.mailRepository.find();
    }

    async getMail(mailID: number): Promise<Mail> {
        return await this.mailRepository.findOne(mailID)
    }

    async createNewMail(newMail: Mail): Promise<Mail> {
        return await this.mailRepository.save(newMail);
    }

    async updateMailFav(mailID: number): Promise<Mail> {
        const mailToUpdate = await this.getMail(mailID);
        mailToUpdate.favorite = !mailToUpdate.favorite;
        this.mailRepository.update(mailID, mailToUpdate)
        return mailToUpdate;
    }

    async deleteMailByID(mailID) {
        this.mailRepository.delete(mailID)
        return await this.getAllMails()
    }

}
