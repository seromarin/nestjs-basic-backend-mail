import { Module } from '@nestjs/common';
import { InboxController } from './inbox.controller';
import { InboxService } from './inbox.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mail } from 'src/entities/mail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mail])],
  controllers: [InboxController],
  providers: [InboxService]
})
export class InboxModule {}
