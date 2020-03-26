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

    async getMail(mailID: number) {
        return await this.mailRepository.findOne(mailID)
    }

    async createNewMail(newMail: Mail) {
        return await this.mailRepository.save(newMail);
    }

}
