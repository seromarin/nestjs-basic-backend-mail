import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mail } from 'src/entities/mail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SentService {

    constructor(
        @InjectRepository(Mail) private mailRepository: Repository<Mail>,
    ) { }

    async getAllMails(mailito: string): Promise<Mail[]> {
        return await this.mailRepository.find({ sender: mailito });
    }

    async getMail(mailID: number) {
        return await this.mailRepository.findOne(mailID)
    }


}
