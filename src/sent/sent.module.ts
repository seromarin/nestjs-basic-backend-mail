import { Module } from '@nestjs/common';
import { SentController } from './sent.controller';
import { SentService } from './sent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mail } from 'src/entities/mail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mail])],
  controllers: [SentController],
  providers: [SentService]
})
export class SentModule {}
